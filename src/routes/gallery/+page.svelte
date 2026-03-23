<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import GalleryGrid from '$lib/components/GalleryGrid.svelte';
	import { galleryItems } from '$lib/data/gallery';
	import { localBusinessJsonLd, breadcrumbJsonLd } from '$lib/utils/seo';

	const jsonLd = localBusinessJsonLd();
	const breadcrumbs = breadcrumbJsonLd([
		{ name: 'Home', url: 'https://baselinecabinetry.com' },
		{ name: 'Gallery', url: 'https://baselinecabinetry.com/gallery' }
	]);

	const categories = ['All', ...new Set(galleryItems.map((g) => g.category))];
	let activeCategory = $state('All');

	const filtered = $derived(
		activeCategory === 'All' ? galleryItems : galleryItems.filter((g) => g.category === activeCategory)
	);
</script>

<SEO
	title="Project Gallery"
	description="Browse our portfolio of custom cabinetry projects — kitchens, bathrooms, built-ins, and more. See the quality and craftsmanship Baseline Cabinetry brings to every home."
	canonical="/gallery"
	{jsonLd}
	breadcrumbJsonLd={breadcrumbs}
/>

<!-- Page Header -->
<div class="bg-[#1e3a5f] text-white py-16">
	<div class="max-w-4xl mx-auto px-4 text-center">
		<h1 class="font-serif text-4xl md:text-5xl font-bold mb-4">Project Gallery</h1>
		<p class="text-blue-200 text-lg">A selection of our recent custom cabinetry work.</p>
	</div>
</div>

<section class="py-16">
	<div class="max-w-6xl mx-auto px-4">
		<!-- Category Filter -->
		<div class="flex flex-wrap gap-3 justify-center mb-10">
			{#each categories as cat}
				<button
					onclick={() => activeCategory = cat}
					class="px-4 py-2 rounded-full text-sm font-medium transition-colors
						{activeCategory === cat
							? 'bg-[#1e3a5f] text-white'
							: 'bg-white text-neutral-600 border border-neutral-200 hover:border-[#1e3a5f] hover:text-[#1e3a5f]'}"
				>
					{cat}
				</button>
			{/each}
		</div>

		<GalleryGrid items={filtered} />

		<div class="mt-16 bg-[#fafaf9] border border-neutral-100 rounded-xl p-10 text-center">
			<h2 class="font-serif text-2xl text-[#1e3a5f] mb-3">More Projects Coming Soon</h2>
			<p class="text-neutral-500 mb-6">We're growing our gallery with project photos. In the meantime, request a consultation to see samples in person.</p>
			<a href="/contact" class="inline-block bg-[#b8860b] hover:bg-[#d4a017] text-white font-semibold px-8 py-3 rounded transition-colors">
				Schedule a Consultation
			</a>
		</div>
	</div>
</section>
