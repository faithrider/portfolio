<script lang="ts">
  import { onMount } from 'svelte';
  // Hero component with fade-on-scroll effect. Displays a title and optional background image.
  export let title: string = '';
  let opacity = 1;
  // Optional background image for the hero. If empty, fallback to the default in CSS.
  export let image: string | undefined = undefined;

  onMount(() => {
    const fadePoint = window.innerHeight * 0.8;
    const onScroll = () => {
      opacity = Math.max(0, 1 - window.scrollY / fadePoint);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<!-- Main hero layout. Children can be placed inside the content area if needed. -->
<section class="hero">
  <div class="hero-bg" style="opacity: {opacity}; background-image: {image ? `url('${image}')` : ''};"></div>
  <div class="hero-content">
    <h1 class="hero-title" style="opacity: {opacity};">{title}</h1>
  </div>
</section>

<!-- Styling for .hero, .hero-bg, and .hero-content is handled in global CSS (src/app.css). -->
