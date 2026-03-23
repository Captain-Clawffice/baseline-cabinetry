<script lang="ts">
	import type { Service } from '$lib/data/services';
	import { ArrowRight } from 'lucide-svelte';

	let { service }: { service: Service } = $props();
</script>

<div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group border border-neutral-100">
	<div class="aspect-video overflow-hidden bg-neutral-100">
		<img
			src={service.image}
			alt={service.imageAlt}
			class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
			loading="lazy"
		/>
	</div>
	<div class="p-5">
		<h3 class="font-serif text-lg font-bold text-primary mb-2">{service.name}</h3>
		<p class="text-neutral-600 text-sm leading-relaxed mb-4">{service.description}</p>
		<a
			href="/services#{service.slug}"
			class="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all"
		>
			Learn more <ArrowRight size={16} />
		</a>
	</div>
</div>
