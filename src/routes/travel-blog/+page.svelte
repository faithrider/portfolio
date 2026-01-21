<script lang="ts">
  // Travel blog index page. Collects and displays .svx posts in this folder as banners.
  import Banner from '$lib/components/Banner.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import statue1 from '$lib/assets/greek-statue1.jpg';
  import statue2 from '$lib/assets/greek-statue2.jpg';
  import statue3 from '$lib/assets/greek-statue3.jpg';
  import statue4 from '$lib/assets/greek-statue4.jpg';
  import statue5 from '$lib/assets/greek-statue5.jpg';

  const images = [statue1, statue2, statue3, statue4, statue5];

  // Gather all .svx posts in this folder.
  const modules = import.meta.glob('./*.svx', { eager: true }) as Record<string, any>;

  type PostEntry = { slug: string; title: string; date?: string; excerpt?: string; image: string };

  // Build a sorted array of posts for display.
  const posts: PostEntry[] = Object.entries(modules)
    .map(([path, mod], i) => {
      const file = path.split('/').pop();
      const filename = file?.replace('.svx', '') || `post-${i}`;
      const meta = mod.metadata ?? mod.frontmatter ?? {};
      const slug = (meta.slug as string) ?? filename;
      const title = meta.title ?? filename;
      const date = meta.date as string | undefined;
      const excerpt = meta.excerpt ?? '';
      const image = meta.heroImage ?? images[i % images.length];
      return { slug, title, date, excerpt, image } as PostEntry;
    })
    .sort((a, b) => {
      if (a.date && b.date) return new Date(b.date).getTime() - new Date(a.date).getTime();
      return a.title.localeCompare(b.title);
    });
</script>

<section class="site-content">
  <SectionHeader title="Travel Blog" subtitle="A growing collection of trip write-ups. Click a banner to read the full post." />

  <div class="flex flex-col gap-8">
    {#each posts as post}
      <Banner
        title={post.title}
        subtitle={post.date}
        image={post.image}
        href={`/travel-blog/${post.slug}`}
      />
    {/each}
  </div>
</section>
