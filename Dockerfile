# Multi-stage Dockerfile for baseline-cabinetry
# Build the app in a node image, then run the built preview in a lightweight node runtime

FROM node:20-alpine AS build
WORKDIR /app

# copy package files and install
COPY package.json package-lock.json .npmrc ./
# Install all deps (dev deps needed for build/preview)
RUN npm ci --silent

# copy sources and build
COPY . ./
RUN npm run build --silent

# Runtime image - copy full build (including node_modules installed in build stage)
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

# Copy app from build stage (includes node_modules and .svelte-kit output)
COPY --from=build /app /app

EXPOSE 3000
# Use vite preview to serve the build on 0.0.0.0:3000
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]
