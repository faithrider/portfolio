<script lang="ts">
  import { onMount } from 'svelte';
  export let params: { slug: string };
  import type { SvelteComponent } from 'svelte';

  let PostComponent: typeof SvelteComponent | null = null;
  let metadata: any = {};
  let loading = true;

  $: slug = params.slug;

  onMount(async () => {
    loading = true;
    try {
      try {
        const mod = await import(`../${slug}.svx`);
        PostComponent = mod.default;
        metadata = mod.metadata ?? mod.frontmatter ?? {};
        loading = false;
        return;
      } catch (e) {
        // ignore and try glob lookup
      }

      const modules = import.meta.glob('../*.svx', { eager: true }) as Record<string, any>;
      let found = false;
      for (const [path, mod] of Object.entries(modules)) {
        const meta = mod.metadata ?? mod.frontmatter ?? {};
        const filename = path.split('/').pop()?.replace('.svx', '');
        const candidateSlug = (meta.slug as string) ?? filename;
        if (candidateSlug === slug) {
          PostComponent = mod.default;
          metadata = meta;
          found = true;
          break;
        }
      }
      if (!found) {
        console.error('Failed to find post for slug', slug);
        PostComponent = null;
        metadata = {};
      }
    } catch (err) {
      console.error('Failed to load post', slug, err);
      PostComponent = null;
      metadata = {};
    }
    loading = false;
  });
</script>

<svelte:head>
  <title>{loading ? 'Honors & Experiences' : (metadata?.title ?? 'Honors & Experiences')}</title>
</svelte:head>

{#if loading}
  <section class="site-content">
    <p class="subtext">Loading post…</p>
  </section>
{:else}
  {#if PostComponent}
    <svelte:component this={PostComponent} />
  {:else}
    <section class="site-content">
      <h2 class="heading">Post not found</h2>
      <p class="subtext">Sorry, that post doesn't exist. Check the filename under <code>src/routes/honors-experiences</code>.</p>
    </section>
  {/if}
{/if}
