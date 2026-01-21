<script lang="ts">
  // TypeScript declaration for import.meta.glob
  // This allows TypeScript to recognize Vite's import.meta.glob function.
  // You can move this to a global.d.ts file if you prefer.
  // Index page for honors experiences. Collects and sorts .svx posts in this folder for display.
  interface ImportMeta {
    glob: (pattern: string, options?: { eager?: boolean }) => Record<string, any>;
  }

  import Banner from '$lib/components/Banner.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  const images = ['$lib/assets/coming-soon.jpg'];

  // Gather all .svx posts in this folder.
  const modules = import.meta.glob('./*.svx', { eager: true }) as Record<string, any>;

  type RawEntry = { slug: string; title: string; date?: string; excerpt?: string; heroImage?: string };

  // Collect metadata from each post for sorting and display.
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

  // Sort posts by date (oldest first), fallback to title if missing.
  raw.sort((a, b) => {
    if (a.date && b.date) return new Date(a.date).getTime() - new Date(b.date).getTime();
    return a.title.localeCompare(b.title);
  });

  // Assign images: prefer frontmatter heroImage, fallback to default if missing.
  type PostEntry = { slug: string; title: string; date?: string; excerpt?: string; image?: string };
  const posts: PostEntry[] = raw.map((entry) => {
    const image = entry.heroImage ?? images[0];
    return { ...entry, image } as PostEntry;
  });
</script>

<section class="site-content routes-honors-experiences">
  <SectionHeader title="Honors & Experiences" subtitle="My notable college experiences, through my Honors Program." />

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
