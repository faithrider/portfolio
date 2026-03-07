<script lang="ts">
  // Year in Review index page. Collects and displays .svx posts in this folder as banners.
  import Banner from '$lib/components/Banner.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import ContactBox from '$lib/components/ContactBox.svelte';
  const images = ['/coming-soon.jpg'];

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

  // Sort posts by date (oldest first), fallback to title if missing.
  raw.sort((a, b) => {
    if (a.date && b.date) return new Date(a.date).getTime() - new Date(b.date).getTime();
    return a.title.localeCompare(b.title);
  });

  type PostEntry = { slug: string; title: string; date?: string; excerpt?: string; image?: string };
  const posts: PostEntry[] = raw.map((entry, idx) => {
    const image = entry.heroImage ?? images[0];
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
<div class="contact-section-bg">
  <div class="contact-section">
    <ContactBox />
  </div>
</div>
<style>
  .contact-section-bg {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    background: url('/thumbnails/london-plane-sunset-thumb.jpg') center/cover no-repeat;
    min-height: 420px;
    display: flex;
    align-items: center;
  }
  .contact-section-bg::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(35,35,43,0.72);
    z-index: 0;
  }
  .contact-section {
    margin: 2.5rem auto;
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    z-index: 1;
  }
</style>
<!-- End of year-in-review index. -->
