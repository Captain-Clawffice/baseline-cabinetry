<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import { services } from '$lib/data/services';
	import { localBusinessJsonLd, breadcrumbJsonLd } from '$lib/utils/seo';

	const jsonLd = localBusinessJsonLd();
	const breadcrumbs = breadcrumbJsonLd([
		{ name: 'Home', url: 'https://baselinecabinetry.com' },
		{ name: 'Services', url: 'https://baselinecabinetry.com/services' }
	]);
</script>

<SEO
	title="Services"
	description="Custom cabinets for every room — kitchen cabinets, bathroom vanities, built-ins, closet systems, entertainment centers, and more. 20+ years of craftsmanship."
	canonical="/services"
	{jsonLd}
	breadcrumbJsonLd={breadcrumbs}
/>

<!-- Page Header -->
<div class="bg-[#1e3a5f] text-white py-16">
	<div class="max-w-4xl mx-auto px-4 text-center">
		<h1 class="font-serif text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
		<p class="text-blue-200 text-lg max-w-xl mx-auto">Custom cabinetry for every room in your home. Each piece designed and built to your exact specifications.</p>
	</div>
</div>

<!-- Services Grid -->
<section class="py-16">
	<div class="max-w-6xl mx-auto px-4">
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each services as service}
				<ServiceCard {service} />
			{/each}
		</div>
	</div>
</section>

<!-- Process Section -->
<section class="py-16 bg-white">
	<div class="max-w-4xl mx-auto px-4">
		<h2 class="font-serif text-3xl text-[#1e3a5f] text-center mb-12">How We Work</h2>
		<div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
			{#each [
				{ step: '01', title: 'Consultation', desc: 'We discuss your vision, needs, and budget in a free no-obligation consultation.' },
				{ step: '02', title: 'Design', desc: 'We create detailed drawings and material samples for your review and approval.' },
				{ step: '03', title: 'Build', desc: 'Your cabinets are custom built in our shop with care and precision.' },
				{ step: '04', title: 'Install', desc: 'Professional installation with cleanup. We don\'t leave until you\'re delighted.' }
			] as item}
				<div class="p-4">
					<div class="font-serif text-4xl font-bold text-[#b8860b] mb-2">{item.step}</div>
					<h3 class="font-serif text-lg font-bold text-[#1e3a5f] mb-2">{item.title}</h3>
					<p class="text-sm text-neutral-600">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-12 bg-[#fafaf9] border-t border-neutral-100 text-center">
	<div class="max-w-xl mx-auto px-4">
		<h2 class="font-serif text-2xl text-[#1e3a5f] mb-3">Have a Project in Mind?</h2>
		<p class="text-neutral-500 mb-6">Get a free, no-obligation quote from our team.</p>
		<a href="/contact" class="inline-block bg-[#b8860b] hover:bg-[#d4a017] text-white font-semibold px-8 py-3 rounded transition-colors">
			Request a Quote
		</a>
	</div>
</section>
