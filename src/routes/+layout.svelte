
<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ContactSectionBanner from '$lib/components/ContactSectionBanner.svelte';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/iceland-blacksandbeach2.jpg" />
	<title>faith rider</title>
</svelte:head>

<div class="site-layout">
	<Header />
	<main class="site-main">
		{@render children?.()} <!-- Page-specific content goes here -->
	</main>
	<ContactSectionBanner />
	<Footer />
<style>
	.grain-effect {
		position: relative;
		width: 100vw;
		height: 100px;
		background: url('/grain.png') repeat center center;
		z-index: 100000;
		pointer-events: none;
	}
</style>
</div>