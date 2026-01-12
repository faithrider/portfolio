<script lang="ts">
  // Use the shared Hero component (logic/styling centralized).
  import Hero from '$lib/components/Hero.svelte';
</script>

<!-- Single hero instance using the reusable Hero component -->
<Hero title="welcome" />

<!-- Main page content -->
<section class="site-content">
  <section class="site-section">
    <h2>Hello!</h2>
    <p>
      I'm Faith Rider, currently a senior pursuing my bachelors in computer science at the University of Cincinnati.
    </p>
    <p>
      My work blends structure with storytelling, technology with creativity, and human needs with real solutions. This portfolio explores those intersections.
    </p>
  </section>
  <section class="site-section">
    <h2>A bit more about me...</h2>
    <p>
      Beyond coding, I tend to describe myself as a lifelong learner and a creative. I've extensively played many instruments (alto sax and bassoon! and nowadays guitar and ukulele, among others), and love digital art. If you have a favorite brush on Procreate app on iPad, let me know!
    </p>
    <p>
        Recently, I've gotten into photography, so all my wallpapers now are pictures I've taken!
    </p>
  </section>
  
  <section class="site-section site-section--alt">
    <h2>Info on this site</h2>
    <p>My portfolio website is entirely coded by me! You can find the source code on my <a href="https://github.com/faithrider" style="color: #6B4F3A;">GitHub</a>. It's been a years long process iterating on design and learning new technologies (currently using SvelteKit).</p>
  </section>
</section>