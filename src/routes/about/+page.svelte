<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { localBusinessJsonLd, breadcrumbJsonLd } from '$lib/utils/seo';

	const jsonLd = localBusinessJsonLd();
	const breadcrumbs = breadcrumbJsonLd([
		{ name: 'Home', url: 'https://baselinecabinetry.com' },
		{ name: 'About', url: 'https://baselinecabinetry.com/about' }
	]);
</script>

<SEO
	title="About Us"
	description="20+ years of custom cabinetry craftsmanship. Learn about Baseline Cabinetry, our founder Geoff, our values, and our commitment to quality."
	canonical="/about"
	{jsonLd}
	breadcrumbJsonLd={breadcrumbs}
/>

<Hero
	title="20+ Years of Craftsmanship"
	subtitle="Built on passion, precision, and a genuine love for woodworking."
	image="/images/about-hero.jpg"
	imageAlt="Craftsman working in a professional woodworking workshop"
	height="medium"
/>

<section class="py-16">
	<div class="max-w-5xl mx-auto px-4">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
			<div>
				<h2 class="font-serif text-3xl text-[#1e3a5f] mb-6">Our Story</h2>
				<p class="text-neutral-600 leading-relaxed mb-4">
					Baseline Cabinetry was built on a simple belief: quality craftsmanship and honest work never go out of style. 
					Founder Geoff has spent over two decades perfecting the craft of custom cabinetry — learning every joint, 
					every finish, and every detail that separates a good cabinet from a great one.
				</p>
				<p class="text-neutral-600 leading-relaxed mb-4">
					What started as a passion for woodworking evolved into a full custom cabinet shop serving homeowners 
					who demand more than what big-box stores can offer. Every project is treated as an opportunity to create 
					something lasting — something that becomes part of your home's story.
				</p>
				<p class="text-neutral-600 leading-relaxed">
					Today, Baseline Cabinetry brings that same dedication to every kitchen, bathroom, and built-in project. 
					We don't do cookie-cutter. We build custom — tailored to your space, your style, your life.
				</p>
			</div>
			<div class="rounded-lg overflow-hidden shadow-lg">
				<img src="/images/workshop.jpg" alt="Baseline Cabinetry workshop" class="w-full h-80 object-cover" loading="lazy" />
			</div>
		</div>

		<!-- Values -->
		<div class="bg-white rounded-xl border border-neutral-100 p-8 mb-16">
			<h2 class="font-serif text-3xl text-[#1e3a5f] text-center mb-8">Our Values</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="text-center">
					<div class="text-3xl mb-3">🏆</div>
					<h3 class="font-serif font-bold text-[#1e3a5f] mb-2">Uncompromising Quality</h3>
					<p class="text-sm text-neutral-600">We use solid hardwoods, quality plywood, and premium hardware. No shortcuts, no compromises.</p>
				</div>
				<div class="text-center">
					<div class="text-3xl mb-3">🤝</div>
					<h3 class="font-serif font-bold text-[#1e3a5f] mb-2">Honest Communication</h3>
					<p class="text-sm text-neutral-600">Clear timelines, transparent pricing, and open communication from first meeting to final installation.</p>
				</div>
				<div class="text-center">
					<div class="text-3xl mb-3">✨</div>
					<h3 class="font-serif font-bold text-[#1e3a5f] mb-2">Attention to Detail</h3>
					<p class="text-sm text-neutral-600">The difference is in the details — tight joints, smooth drawer action, perfect finishes every time.</p>
				</div>
			</div>
		</div>

		<!-- Stats -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
			{#each [['20+', 'Years Experience'], ['500+', 'Projects Completed'], ['100%', 'Custom Built'], ['5★', 'Customer Satisfaction']] as [num, label]}
				<div class="bg-[#1e3a5f] text-white rounded-lg p-6">
					<div class="font-serif text-3xl font-bold text-[#b8860b] mb-1">{num}</div>
					<div class="text-sm text-blue-200">{label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-12 bg-[#fafaf9] border-t border-neutral-100 text-center">
	<div class="max-w-xl mx-auto px-4">
		<h2 class="font-serif text-2xl text-[#1e3a5f] mb-3">Ready to Work Together?</h2>
		<p class="text-neutral-500 mb-6">Let's build something you'll love for years to come.</p>
		<a href="/contact" class="inline-block bg-[#b8860b] hover:bg-[#d4a017] text-white font-semibold px-8 py-3 rounded transition-colors">
			Request a Free Quote
		</a>
	</div>
</section>
