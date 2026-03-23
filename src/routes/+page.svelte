<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import { services } from '$lib/data/services';
	import { localBusinessJsonLd } from '$lib/utils/seo';

	const featuredServices = services.slice(0, 6);
	const jsonLd = localBusinessJsonLd();

	const valueProps = [
		{
			icon: '🪵',
			title: 'Quality Materials',
			desc: 'We source premium hardwoods, plywood, and hardware. Every cabinet is built to outlast trends and stand up to daily use.'
		},
		{
			icon: '📐',
			title: 'Custom Design',
			desc: 'No two homes are alike. We design each piece from scratch to fit your exact space, style, and storage needs.'
		},
		{
			icon: '🛠️',
			title: 'Expert Craftsmanship',
			desc: 'Over 20 years building cabinets the right way — tight joints, smooth finishes, soft-close hardware as standard.'
		}
	];
</script>

<SEO
	title="Custom Cabinetry"
	description="Baseline Cabinetry — custom cabinetry built to last. 20+ years of expert craftsmanship for kitchens, bathrooms, built-ins, and more. Request a free quote."
	canonical="/"
	{jsonLd}
/>

<!-- Hero -->
<Hero
	title="Custom Cabinetry, Built to Last"
	subtitle="20+ years of expert craftsmanship. From kitchen cabinets to custom built-ins, we build pieces that transform your home."
	image="/images/hero.jpg"
	imageAlt="Beautiful custom kitchen with white shaker cabinets"
	ctaText="Request a Free Quote"
	ctaHref="/contact"
/>

<!-- Value Props -->
<section class="py-16 bg-white">
	<div class="max-w-6xl mx-auto px-4">
		<h2 class="font-serif text-3xl md:text-4xl text-center text-[#1e3a5f] mb-12">Why Choose Baseline Cabinetry?</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each valueProps as vp}
				<div class="text-center p-6 rounded-lg bg-[#fafaf9] border border-neutral-100">
					<div class="text-4xl mb-4">{vp.icon}</div>
					<h3 class="font-serif text-xl font-bold text-[#1e3a5f] mb-3">{vp.title}</h3>
					<p class="text-neutral-600 text-sm leading-relaxed">{vp.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Featured Services -->
<section class="py-16 bg-[#fafaf9]">
	<div class="max-w-6xl mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="font-serif text-3xl md:text-4xl text-[#1e3a5f] mb-3">Our Services</h2>
			<p class="text-neutral-500 max-w-xl mx-auto">From kitchen cabinets to garage storage, we build custom solutions for every room in your home.</p>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each featuredServices as service}
				<ServiceCard {service} />
			{/each}
		</div>
		<div class="text-center mt-10">
			<a href="/services" class="inline-block border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-8 py-3 rounded font-semibold transition-colors">
				View All Services
			</a>
		</div>
	</div>
</section>

<!-- CTA Banner -->
<section class="py-16 bg-[#1e3a5f] text-white text-center">
	<div class="max-w-2xl mx-auto px-4">
		<h2 class="font-serif text-3xl md:text-4xl mb-4">Ready to Start Your Project?</h2>
		<p class="text-blue-200 mb-8 text-lg">Request a free quote today. We'll listen to your vision and design something exceptional.</p>
		<a
			href="/contact"
			class="inline-block bg-[#b8860b] hover:bg-[#d4a017] text-white font-semibold px-10 py-4 rounded text-lg transition-colors shadow-lg"
		>
			Get a Free Quote
		</a>
	</div>
</section>

<!-- Testimonials Placeholder -->
<section class="py-16 bg-white">
	<div class="max-w-4xl mx-auto px-4 text-center">
		<h2 class="font-serif text-3xl text-[#1e3a5f] mb-12">What Our Customers Say</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<blockquote class="bg-[#fafaf9] rounded-lg p-6 border border-neutral-100 text-left">
				<p class="text-neutral-600 italic mb-4">"Geoff transformed our outdated kitchen into something out of a magazine. The quality is outstanding and he was great to work with from start to finish."</p>
				<footer class="text-sm font-semibold text-[#1e3a5f]">— Happy Customer</footer>
			</blockquote>
			<blockquote class="bg-[#fafaf9] rounded-lg p-6 border border-neutral-100 text-left">
				<p class="text-neutral-600 italic mb-4">"I've hired many contractors over the years. Baseline Cabinetry stands out for attention to detail and honest communication throughout the entire project."</p>
				<footer class="text-sm font-semibold text-[#1e3a5f]">— Satisfied Homeowner</footer>
			</blockquote>
		</div>
	</div>
</section>
