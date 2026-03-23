<script lang="ts">
	import { page } from '$app/stores';
	import { Menu, X } from 'lucide-svelte';

	let mobileOpen = $state(false);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },
		{ href: '/gallery', label: 'Gallery' },
		{ href: '/contact', label: 'Contact' }
	];

	function isActive(href: string) {
		if (href === '/') return $page.url.pathname === '/';
		return $page.url.pathname.startsWith(href);
	}
</script>

<header class="bg-primary shadow-md sticky top-0 z-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-2 text-white hover:text-accent transition-colors">
				<div class="w-8 h-8 bg-accent rounded flex items-center justify-center font-serif font-bold text-white text-sm">BC</div>
				<span class="font-serif text-xl font-bold">Baseline Cabinetry</span>
			</a>

			<!-- Desktop Nav -->
			<nav class="hidden md:flex items-center gap-1">
				{#each navLinks as link}
					<a
						href={link.href}
						class="px-4 py-2 rounded text-sm font-medium transition-colors {isActive(link.href)
							? 'text-accent bg-white/10'
							: 'text-white/90 hover:text-white hover:bg-white/10'}"
					>
						{link.label}
					</a>
				{/each}
				<a
					href="/contact"
					class="ml-3 px-5 py-2 bg-accent text-white rounded font-medium text-sm hover:bg-accent-light transition-colors"
				>
					Free Quote
				</a>
			</nav>

			<!-- Mobile Toggle -->
			<button
				class="md:hidden text-white p-2"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label="Toggle menu"
			>
				{#if mobileOpen}
					<X size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if mobileOpen}
		<div class="md:hidden bg-primary-light border-t border-white/10">
			<nav class="px-4 py-3 flex flex-col gap-1">
				{#each navLinks as link}
					<a
						href={link.href}
						class="px-4 py-2 rounded text-sm font-medium transition-colors {isActive(link.href)
							? 'text-accent bg-white/10'
							: 'text-white/90 hover:text-white hover:bg-white/10'}"
						onclick={() => (mobileOpen = false)}
					>
						{link.label}
					</a>
				{/each}
				<a
					href="/contact"
					class="mt-2 px-5 py-2 bg-accent text-white rounded font-medium text-sm text-center hover:bg-accent-light transition-colors"
					onclick={() => (mobileOpen = false)}
				>
					Request a Free Quote
				</a>
			</nav>
		</div>
	{/if}
</header>
