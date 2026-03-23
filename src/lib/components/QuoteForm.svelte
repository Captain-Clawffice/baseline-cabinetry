<script lang="ts">
	let name = '';
	let email = '';
	let phone = '';
	let projectType = '';
	let message = '';

	let submitting = false;
	let success = false;
	let errorMsg = '';

	async function handleSubmit(e: Event) {
		e.preventDefault();
		submitting = true;
		errorMsg = '';
		success = false;

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, phone, projectType, message })
			});

			const data = await res.json();

			if (!res.ok) {
				errorMsg = data.error ?? 'Something went wrong. Please try again.';
			} else {
				success = true;
				name = '';
				email = '';
				phone = '';
				projectType = '';
				message = '';
			}
		} catch {
			errorMsg = 'Network error. Please check your connection and try again.';
		} finally {
			submitting = false;
		}
	}
</script>

{#if success}
	<div class="rounded-lg bg-green-50 border border-green-200 p-6 text-center">
		<svg class="w-12 h-12 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
		</svg>
		<h3 class="text-lg font-semibold text-green-800 mb-1">Message Sent!</h3>
		<p class="text-green-700">Thank you for reaching out. We'll get back to you within 1–2 business days.</p>
		<button
			type="button"
			class="mt-4 text-sm text-green-600 underline hover:text-green-800"
			onclick={() => (success = false)}
		>
			Send another message
		</button>
	</div>
{:else}
	<form onsubmit={handleSubmit} class="space-y-4">
		{#if errorMsg}
			<div class="rounded-md bg-red-50 border border-red-200 p-4 text-red-700 text-sm">
				{errorMsg}
			</div>
		{/if}

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name <span class="text-red-500">*</span></label>
				<input
					id="name"
					type="text"
					bind:value={name}
					required
					class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
					placeholder="Your full name"
				/>
			</div>
			<div>
				<label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email <span class="text-red-500">*</span></label>
				<input
					id="email"
					type="email"
					bind:value={email}
					required
					class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
					placeholder="you@example.com"
				/>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
				<input
					id="phone"
					type="tel"
					bind:value={phone}
					class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
					placeholder="(555) 555-5555"
				/>
			</div>
			<div>
				<label for="projectType" class="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
				<select
					id="projectType"
					bind:value={projectType}
					class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500 bg-white"
				>
					<option value="">Select a project type</option>
					<option value="kitchen">Kitchen Cabinets</option>
					<option value="bathroom">Bathroom Vanity</option>
					<option value="closet">Closet / Storage</option>
					<option value="custom">Custom Furniture</option>
					<option value="other">Other</option>
				</select>
			</div>
		</div>

		<div>
			<label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message <span class="text-red-500">*</span></label>
			<textarea
				id="message"
				bind:value={message}
				required
				rows={5}
				class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
				placeholder="Tell us about your project..."
			></textarea>
		</div>

		<button
			type="submit"
			disabled={submitting}
			class="w-full rounded-md bg-stone-800 px-6 py-3 text-white font-medium hover:bg-stone-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
		>
			{submitting ? 'Sending…' : 'Send Message'}
		</button>
	</form>
{/if}
