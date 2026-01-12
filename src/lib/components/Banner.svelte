<script lang="ts">
  /**
   * Full-width clickable banner used for indexes (travel-blog, projects, etc.)
   * Props:
   * - title: main text
   * - subtitle: small supporting text
   * - image: URL to background image (string)
   * - href: where the banner links to
   */
  export let title: string = '';
  export let subtitle: string = '';
  export let image: string = '';
  export let href: string = '#';
  export let ariaLabel: string = '';
</script>

<a class="banner block w-full" href={href} aria-label={ariaLabel || title}>
  <div
    class="relative w-full h-[48vh] md:h-[64vh] bg-cover bg-center flex items-end"
    style="background-image: url('{image}');">
    <div class="absolute inset-0 bg-black/30"></div>
    <div class="relative z-10 w-full px-6 py-8 md:px-12 md:py-12 text-left text-white">
      <h3 class="text-3xl md:text-5xl">{title}</h3>
      {#if subtitle}
        <p class="mt-2 text-white text-sm md:text-base opacity-90">{subtitle}</p>
      {/if}
    </div>
  </div>
</a>

<!-- Notes:
  - This component relies on Tailwind utilities available in the project.
  - Use an accessible anchor so the banner is keyboard-focusable and behaves
    like a link. The overlay and gradient ensure text is readable over images.
-->
