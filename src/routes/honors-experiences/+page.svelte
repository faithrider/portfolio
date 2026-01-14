<script lang="ts">
  // TypeScript declaration for import.meta.glob
  // This allows TypeScript to recognize Vite's import.meta.glob function.
  // You can move this to a global.d.ts file if you prefer.
  interface ImportMeta {
    glob: (pattern: string, options?: { eager?: boolean }) => Record<string, any>;
  }

  import Banner from '$lib/components/Banner.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  // Reuse the same set of placeholder images used by travel-blog or leave blank.
  const images = ['$lib/assets/greek-statue1.jpg', '$lib/assets/greek-statue2.jpg', '$lib/assets/greek-statue3.jpg'];

  // Glob all .svx files in this folder (honors-experiences). Eager so metadata is available.
  const modules = import.meta.glob('./*.svx', { eager: true }) as Record<string, any>;

  type RawEntry = { slug: string; title: string; date?: string; excerpt?: string; heroImage?: string };

  // First, collect raw entries (preserve metadata from each module)
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

  // Sort oldest-first (chronological ascending). If dates are missing, fall back to title.
  raw.sort((a, b) => {
    if (a.date && b.date) return new Date(a.date).getTime() - new Date(b.date).getTime();
    return a.title.localeCompare(b.title);
  });

  // After sorting, assign images deterministically: prefer frontmatter `heroImage`,
  // otherwise pick a fallback based on the index so ordering is stable.
  type PostEntry = { slug: string; title: string; date?: string; excerpt?: string; image?: string };
  const posts: PostEntry[] = raw.map((entry, idx) => {
    const image = entry.heroImage ?? images[idx % images.length];
    return { ...entry, image } as PostEntry;
  });
</script>

<section class="site-content routes-honors-experiences">
  <SectionHeader title="Honors & Experiences" subtitle="A collection of my notable honors college experiences." />

  <div class="flex flex-col">
    {#each posts as post}
      <Banner
        title={post.title}
        subtitle={post.date}
        image={post.image}
        href={`/honors-experiences/${post.slug}`}
      />
    {/each}
  </div>
</section>
<!-- End of honors-experiences index. Add cards or additional sections below if needed, but ensure a single top-level <script> block remains. -->
