<script lang="ts">
	let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
	let errorMessage = $state('');

	const projectTypes = [
		'Kitchen Cabinets',
		'Bathroom Vanity',
		'Custom Built-ins',
		'Closet System',
		'Entertainment Center',
		'Laundry Room',
		'Garage Storage',
		'Fireplace Surround',
		"Butler's Pantry",
		'Cabinet Refacing/Refinishing',
		'Other'
	];

	const timelines = [
		'ASAP',
		'Within 1 month',
		'1–3 months',
		'3–6 months',
		'6+ months / Planning phase'
	];

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		status = 'submitting';

		const form = event.target as HTMLFormElement;
		const data = new FormData(form);

		try {
			const response = await fetch('https://formspree.io/f/REPLACE_WITH_FORM_ID', {
				method: 'POST',
				body: data,
				headers: { Accept: 'application/json' }
			});

			if (response.ok) {
				status = 'success';
				form.reset();
			} else {
				const json = await response.json();
				errorMessage = json.errors?.map((e: { message: string }) => e.message).join(', ') || 'Submission failed.';
				status = 'error';
			}
		} catch {
			errorMessage = 'Network error. Please try again or call us directly.';
			status = 'error';
		}
	}
</script>

{#if status === 'success'}
	<div class="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
		<div class="text-4xl mb-4">✅</div>
		<h3 class="font-serif text-2xl text-[#1e3a5f] mb-2">Request Received!</h3>
		<p class="text-neutral-600">Thank you! We'll be in touch within 1–2 business days to discuss your project.</p>
	</div>
{:else}
	<form
		onsubmit={handleSubmit}
		class="space-y-5"
		novalidate
	>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
			<div>
				<label for="name" class="block text-sm font-medium text-neutral-700 mb-1">Full Name *</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					placeholder="Jane Smith"
					class="w-full border border-neutral-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f]"
				/>
			</div>
			<div>
				<label for="phone" class="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					placeholder="(555) 555-5555"
					class="w-full border border-neutral-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f]"
				/>
			</div>
		</div>

		<div>
			<label for="email" class="block text-sm font-medium text-neutral-700 mb-1">Email Address *</label>
			<input
				type="email"
				id="email"
				name="email"
				required
				placeholder="jane@example.com"
				class="w-full border border-neutral-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f]"
			/>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
			<div>
				<label for="project_type" class="block text-sm font-medium text-neutral-700 mb-1">Project Type *</label>
				<select
					id="project_type"
					name="project_type"
					required
					class="w-full border border-neutral-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] bg-white"
				>
					<option value="">Select a project type…</option>
					{#each projectTypes as type}
						<option value={type}>{type}</option>
					{/each}
				</select>
			</div>
			<div>
				<label for="timeline" class="block text-sm font-medium text-neutral-700 mb-1">Preferred Timeline</label>
				<select
					id="timeline"
					name="timeline"
					class="w-full border border-neutral-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] bg-white"
				>
					<option value="">Select a timeline…</option>
					{#each timelines as t}
						<option value={t}>{t}</option>
					{/each}
				</select>
			</div>
		</div>

		<div>
			<label for="message" class="block text-sm font-medium text-neutral-700 mb-1">Project Description *</label>
			<textarea
				id="message"
				name="message"
				required
				rows="5"
				placeholder="Tell us about your project — dimensions, style preferences, any inspiration photos you have…"
				class="w-full border border-neutral-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] resize-y"
			></textarea>
		</div>

		{#if status === 'error'}
			<p class="text-red-600 text-sm bg-red-50 border border-red-200 rounded p-3">{errorMessage}</p>
		{/if}

		<button
			type="submit"
			disabled={status === 'submitting'}
			class="w-full bg-[#b8860b] hover:bg-[#d4a017] disabled:opacity-60 text-white font-semibold py-3 px-6 rounded text-base transition-colors"
		>
			{status === 'submitting' ? 'Sending…' : 'Request a Free Quote'}
		</button>

		<p class="text-xs text-neutral-400 text-center">We'll respond within 1–2 business days. No spam, ever.</p>
	</form>
{/if}
