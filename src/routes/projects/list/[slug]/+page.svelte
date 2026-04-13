
<script lang="ts">
import { onMount } from 'svelte';
import type { SvelteComponent } from 'svelte';

let ProjectComponent: typeof SvelteComponent | null = null;
let metadata: any = {};
let loading = true;

export let params: { slug: string };
$: slug = params.slug;

onMount(async () => {
  loading = true;
  try {
    // Try to import the .svx file by slug
    try {
      const mod = await import(`../${slug}.svx`);
      ProjectComponent = mod.default;
      metadata = mod.metadata ?? mod.frontmatter ?? {};
      loading = false;
      return;
    } catch (e) {
      // fallback to glob
    }
    // Fallback: look through all .svx modules in this folder and find one whose frontmatter `slug` matches
    const modules = import.meta.glob('../*.svx', { eager: true }) as Record<string, any>;
    let found = false;
    for (const [path, mod] of Object.entries(modules)) {
      const meta = mod.metadata ?? mod.frontmatter ?? {};
      const filename = path.split('/').pop()?.replace('.svx', '');
      const candidateSlug = (meta.slug as string) ?? filename;
      if (candidateSlug === slug) {
        ProjectComponent = mod.default;
        metadata = meta;
        found = true;
        break;
      }
    }
    if (!found) {
      ProjectComponent = null;
      metadata = {};
    }
  } catch (err) {
    ProjectComponent = null;
    metadata = {};
  }
  loading = false;
});
</script>

<svelte:head>
  <title>{loading ? 'Project' : (metadata?.title ?? 'Project')}</title>
</svelte:head>


{#if loading}
  <p>Loading...</p>
{:else if ProjectComponent}
  <section class="project-detail">
    <svelte:component this={ProjectComponent} />
  </section>
{:else}
  <p>Project not found.</p>
{/if}
