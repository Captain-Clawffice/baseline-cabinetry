<script lang="ts">
	interface Props {
		title: string;
		description: string;
		image?: string;
		url?: string;
		type?: string;
		jsonLd?: string;
	}

	let { title, description, image = '/images/og-default.jpg', url, type = 'website', jsonLd }: Props = $props();

	const siteName = 'Baseline Cabinetry';
	const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	<meta property="og:image" content={image} />
	{#if url}
		<meta property="og:url" content={url} />
		<link rel="canonical" href={url} />
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	{#if jsonLd}
		{@html `<script type="application/ld+json">${jsonLd}<\/script>`}
	{/if}
</svelte:head>
