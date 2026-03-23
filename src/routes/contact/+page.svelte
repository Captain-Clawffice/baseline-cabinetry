<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import { localBusinessJsonLd, breadcrumbJsonLd } from '$lib/utils/seo';
	import { page } from '$app/stores';

	const jsonLd = localBusinessJsonLd() + '\n' + breadcrumbJsonLd([
		{ name: 'Home', url: 'https://baselinecabinetry.com' },
		{ name: 'Contact', url: 'https://baselinecabinetry.com/contact' }
	]);

	// Pre-select service from query param
	const preselected = $derived($page.url.searchParams.get('service') ?? '');

	let submitted = $state(false);
	let submitting = $state(false);
	let error = $state('');

	// Formspree endpoint — replace XXXXXXXX with real form ID when available
	const FORMSPREE_ID = 'xpwzovrd';

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		submitting = true;
		error = '';
		const form = e.target as HTMLFormElement;
		const data = new FormData(form);
		try {
			const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
				method: 'POST',
				body: data,
				headers: { Accept: 'application/json' }
			});
			if (res.ok) {
				submitted = true;
				form.reset();
			} else {
				error = 'Something went wrong. Please try calling or emailing us directly.';
			}
		} catch {
			error = 'Network error. Please try again.';
		} finally {
			submitting = false;
		}
	}
</script>

<SEO
	title="Contact & Free Quote"
	description="Request a free custom cabinetry quote from Baseline Cabinetry. Kitchen, bathroom, built-ins, and more. We'll get back to you within one business day."
	url="https://baselinecabinetry.com/contact"
	jsonLd={jsonLd}
/>

<!-- Page Hero -->
<section class="relative overflow-hidden bg-primary">
	<img
		src="/images/contact-hero.jpg"
		alt="Design consultation"
		class="absolute inset-0 w-full h-full object-cover opacity-20"
	/>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<p class="text-accent font-medium uppercase tracking-wide text-sm mb-2">Let's Talk</p>
		<h1 class="font-serif text-4xl sm:text-5xl font-bold text-white mb-3">Contact Us</h1>
		<p class="text-white/70 max-w-lg">Request a free quote, ask a question, or just say hello. We'll get back to you within one business day.</p>
	</div>
</section>

<!-- Contact Content -->
<section class="bg-neutral-50 py-16">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
			<!-- Info -->
			<div class="lg:col-span-1">
				<h2 class="font-serif text-2xl font-bold text-primary mb-6">Get in Touch</h2>
				<div class="space-y-5 text-sm text-neutral-600">
					<div class="flex gap-3">
						<span class="text-xl">📞</span>
						<div>
							<p class="font-semibold text-neutral-800">Phone</p>
							<a href="tel:+15550000000" class="text-accent hover:underline">(555) 000-0000</a>
						</div>
					</div>
					<div class="flex gap-3">
						<span class="text-xl">✉️</span>
						<div>
							<p class="font-semibold text-neutral-800">Email</p>
							<a href="mailto:info@baselinecabinetry.com" class="text-accent hover:underline">info@baselinecabinetry.com</a>
						</div>
					</div>
					<div class="flex gap-3">
						<span class="text-xl">🕐</span>
						<div>
							<p class="font-semibold text-neutral-800">Hours</p>
							<p>Mon–Fri: 8:00am – 5:00pm</p>
							<p>Sat: 9:00am – 2:00pm</p>
							<p>Sun: Closed</p>
						</div>
					</div>
				</div>

				<div class="mt-8 p-5 bg-accent/10 rounded-xl border border-accent/20">
					<p class="font-semibold text-primary mb-1">Free Consultations</p>
					<p class="text-sm text-neutral-600">
						We offer free in-home consultations. We'll come to you, measure your space, and discuss options — all at no cost or obligation.
					</p>
				</div>
			</div>

			<!-- Form -->
			<div class="lg:col-span-2">
				{#if submitted}
					<div class="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
						<div class="text-5xl mb-4">✅</div>
						<h3 class="font-serif text-2xl font-bold text-primary mb-2">Thank You!</h3>
						<p class="text-neutral-600">
							We've received your request and will be in touch within one business day. We look forward to working with you!
						</p>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="bg-white rounded-xl shadow-sm border border-neutral-100 p-8 space-y-5">
						<h2 class="font-serif text-2xl font-bold text-primary">Request a Free Quote</h2>

						{#if error}
							<div class="bg-red-50 border border-red-200 rounded p-3 text-sm text-red-700">{error}</div>
						{/if}

						<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
							<div>
								<label for="name" class="block text-sm font-medium text-neutral-700 mb-1">Full Name *</label>
								<input
									id="name"
									name="name"
									type="text"
									required
									placeholder="Jane Smith"
									class="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
								/>
							</div>
							<div>
								<label for="phone" class="block text-sm font-medium text-neutral-700 mb-1">Phone</label>
								<input
									id="phone"
									name="phone"
									type="tel"
									placeholder="(555) 000-0000"
									class="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
								/>
							</div>
						</div>

						<div>
							<label for="email" class="block text-sm font-medium text-neutral-700 mb-1">Email Address *</label>
							<input
								id="email"
								name="email"
								type="email"
								required
								placeholder="jane@example.com"
								class="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
							/>
						</div>

						<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
							<div>
								<label for="project_type" class="block text-sm font-medium text-neutral-700 mb-1">Project Type *</label>
								<select
									id="project_type"
									name="project_type"
									required
									class="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
								>
									<option value="">Select a project type...</option>
									<option value="kitchen-cabinets" selected={preselected === 'kitchen-cabinets'}>Kitchen Cabinets</option>
									<option value="bathroom-vanities" selected={preselected === 'bathroom-vanities'}>Bathroom Vanities</option>
									<option value="custom-builtins" selected={preselected === 'custom-builtins'}>Custom Built-ins</option>
									<option value="closet-systems" selected={preselected === 'closet-systems'}>Closet Systems</option>
									<option value="entertainment-centers" selected={preselected === 'entertainment-centers'}>Entertainment Centers</option>
									<option value="laundry-room" selected={preselected === 'laundry-room'}>Laundry Room Cabinets</option>
									<option value="garage-storage" selected={preselected === 'garage-storage'}>Garage Storage</option>
									<option value="fireplace-surrounds" selected={preselected === 'fireplace-surrounds'}>Fireplace Surrounds</option>
									<option value="butlers-pantry" selected={preselected === "butlers-pantry"}>Butler's Pantries</option>
									<option value="refacing-refinishing" selected={preselected === 'refacing-refinishing'}>Cabinet Refacing & Refinishing</option>
									<option value="other">Other</option>
								</select>
							</div>
							<div>
								<label for="timeline" class="block text-sm font-medium text-neutral-700 mb-1">Preferred Timeline</label>
								<select
									id="timeline"
									name="timeline"
									class="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
								>
									<option value="">Select a timeline...</option>
									<option value="asap">As soon as possible</option>
									<option value="1-3months">1–3 months</option>
									<option value="3-6months">3–6 months</option>
									<option value="6plus">6+ months / Planning ahead</option>
									<option value="flexible">Flexible</option>
								</select>
							</div>
						</div>

						<div>
							<label for="message" class="block text-sm font-medium text-neutral-700 mb-1">Tell Us About Your Project *</label>
							<textarea
								id="message"
								name="message"
								required
								rows={5}
								placeholder="Describe your project — room size, style preferences, any special requirements..."
								class="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
							></textarea>
						</div>

						<button
							type="submit"
							disabled={submitting}
							class="w-full py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
						>
							{submitting ? 'Sending...' : 'Send My Request'}
						</button>

						<p class="text-xs text-neutral-500 text-center">
							We respect your privacy. Your information will never be shared or sold.
						</p>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
