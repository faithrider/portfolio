<script lang="ts">
  import { onMount } from 'svelte';
  /**
   * Simple Hero component with built-in fade-on-scroll behavior.
   * Props:
   * - title: main heading text
   * The component handles its own scroll listener and cleans up on destroy.
   */
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

<!-- Reusable hero layout; place optional children inside the content area -->
<section class="hero">
  <div class="hero-bg" style="opacity: {opacity}; background-image: {image ? `url('${image}')` : ''};"></div>
  <div class="hero-content">
    <h1 class="hero-title" style="opacity: {opacity};">{title}</h1>
  </div>
</section>

<!-- Notes: styling for `.hero`, `.hero-bg` and `.hero-content` comes from global CSS
     (src/app.css). This keeps the component lean and styling centralized. -->
