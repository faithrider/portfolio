<script lang="ts">
  /**
   * Lightweight Card component skeleton to display items (blog posts, honors, etc.).
   * Props:
   * - title: string
   * - excerpt: string (short blurb)
   * - href: optional link target
   * This component is intentionally simple — we'll add expand/collapse behavior
   * later when implementing the interactive card UI.
   */
  export let title: string;
  export let excerpt: string = '';
  export let href: string | null = null;
</script>

<article class="card border rounded-lg p-6 bg-surface">
  {#if href}
    <a href={href} class="card-link block">
      <h3 class="text-xl font-semibold mb-2">{title}</h3>
      {#if excerpt}
        <p class="text-sm text-neutral-600">{excerpt}</p>
      {/if}
    </a>
  {:else}
    <div>
      <h3 class="text-xl font-semibold mb-2">{title}</h3>
      {#if excerpt}
        <p class="text-sm text-neutral-600">{excerpt}</p>
      {/if}
    </div>
  {/if}
</article>

<!-- Notes: keep styling minimal and rely on global Tailwind utilities in app.css.
     We'll add interactive expand/collapse and transitions when implementing cards.
-->
