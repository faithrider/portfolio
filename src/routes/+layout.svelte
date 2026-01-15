
<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/overlooking-stars.jpg';
  	import Header from '$lib/components/Header.svelte';
  	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>faith rider</title>
</svelte:head>

<div class="site-layout">
  <Header />
  <main class="site-main">
	{@render children?.()} <!-- Page-specific content goes here -->
  </main>
  <Footer />
</div>