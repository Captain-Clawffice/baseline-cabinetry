<script lang="ts">
	import type { GalleryItem } from '$lib/data/gallery';

	interface Props {
		items: GalleryItem[];
	}

	let { items }: Props = $props();

	let selected = $state<GalleryItem | null>(null);
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
	{#each items as item}
		<button
			class="group aspect-video overflow-hidden rounded-lg bg-neutral-100 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
			onclick={() => selected = item}
			aria-label="View {item.alt}"
		>
			<img
				src={item.src}
				alt={item.alt}
				class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
				loading="lazy"
			/>
		</button>
	{/each}
</div>

<!-- Lightbox -->
{#if selected}
	<div
		class="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
		onclick={() => selected = null}
		onkeydown={(e) => e.key === 'Escape' && (selected = null)}
		role="dialog"
		aria-modal="true"
		aria-label="Image lightbox"
		tabindex="-1"
	>
		<div class="max-w-4xl w-full" onclick={(e) => e.stopPropagation()} role="presentation">
			<img src={selected.src} alt={selected.alt} class="w-full rounded-lg shadow-2xl" />
			<p class="text-white text-center mt-3 text-sm">{selected.alt}</p>
			<button
				onclick={() => selected = null}
				class="absolute top-4 right-4 text-white text-3xl font-light hover:text-[#b8860b] transition-colors"
				aria-label="Close lightbox"
			>✕</button>
		</div>
	</div>
{/if}
