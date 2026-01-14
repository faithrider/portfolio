<script lang="ts">
  import Banner from '$lib/components/Banner.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import statue1 from '$lib/assets/greek-statue1.jpg';
  import statue2 from '$lib/assets/greek-statue2.jpg';
  import statue3 from '$lib/assets/greek-statue3.jpg';
  const images = [statue1, statue2, statue3];

  const modules = import.meta.glob('./*.svx', { eager: true }) as Record<string, any>;

  type RawEntry = { slug: string; title: string; date?: string; excerpt?: string; heroImage?: string };

  const raw: RawEntry[] = Object.entries(modules).map(([path, mod], i) => {
    const file = path.split('/').pop();
    const filename = file?.replace('.svx', '') || `post-${i}`;
    const meta = mod.metadata ?? mod.frontmatter ?? {};
    const slug = (meta.slug as string) ?? filename;
    const title = meta.title ?? filename;
    const date = meta.date as string | undefined;
    const excerpt = meta.excerpt ?? '';
    const heroImage = meta.heroImage as string | undefined;
    return { slug, title, date, excerpt, heroImage } as RawEntry;
  });

  // Sort oldest-first (chronological ascending)
  raw.sort((a, b) => {
    if (a.date && b.date) return new Date(a.date).getTime() - new Date(b.date).getTime();
    return a.title.localeCompare(b.title);
  });

  type PostEntry = { slug: string; title: string; date?: string; excerpt?: string; image?: string };
  const posts: PostEntry[] = raw.map((entry, idx) => {
    const image = entry.heroImage ?? images[idx % images.length];
    return { ...entry, image } as PostEntry;
  });
</script>

<section class="site-content routes-year-in-review">
  <SectionHeader title="Year in Review" subtitle="Reflections from each of my years in university." />

  <div class="flex flex-col">
    {#each posts as post}
      <Banner
        title={post.title}
        subtitle={post.date}
        image={post.image}
        href={`/year-in-review/${post.slug}`}
      />
    {/each}
  </div>
</section>
<!-- End of year-in-review index. Add cards or additional sections below if needed, but ensure a single top-level <script> block remains. -->
