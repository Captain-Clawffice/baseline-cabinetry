<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
		image: string;
		imageAlt: string;
		ctaText?: string;
		ctaHref?: string;
		height?: 'tall' | 'medium';
	}

	let { title, subtitle, image, imageAlt, ctaText, ctaHref = '/contact', height = 'tall' }: Props = $props();
</script>

<section
	class="relative flex items-center justify-center text-white overflow-hidden
		{height === 'tall' ? 'min-h-[75vh]' : 'min-h-[45vh]'}"
>
	<!-- Background image -->
	<img
		src={image}
		alt={imageAlt}
		class="absolute inset-0 w-full h-full object-cover"
		loading="eager"
	/>
	<!-- Overlay -->
	<div class="absolute inset-0 bg-[#1e3a5f]/70"></div>

	<!-- Content -->
	<div class="relative z-10 text-center max-w-3xl px-4">
		<h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
			{title}
		</h1>
		{#if subtitle}
			<p class="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">{subtitle}</p>
		{/if}
		{#if ctaText}
			<a
				href={ctaHref}
				class="inline-block bg-[#b8860b] hover:bg-[#d4a017] text-white font-semibold px-8 py-3 rounded text-lg transition-colors shadow-lg"
			>
				{ctaText}
			</a>
		{/if}
	</div>
</section>
