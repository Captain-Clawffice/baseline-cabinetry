import type { RequestHandler } from '@sveltejs/kit';

const siteUrl = 'https://baselinecabinetry.com';

const pages = [
	{ loc: '/', priority: '1.0', changefreq: 'weekly' },
	{ loc: '/about', priority: '0.8', changefreq: 'monthly' },
	{ loc: '/services', priority: '0.9', changefreq: 'monthly' },
	{ loc: '/gallery', priority: '0.7', changefreq: 'weekly' },
	{ loc: '/contact', priority: '0.8', changefreq: 'monthly' }
];

export const GET: RequestHandler = () => {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(p) => `  <url>
    <loc>${siteUrl}${p.loc}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
