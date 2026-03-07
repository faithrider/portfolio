<script lang="ts">
  // Projects index page. Displays project cards; update as new projects are added.
  import Card from '$lib/components/Card.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import ContactBox from '$lib/components/ContactBox.svelte';
</script>

<section class="site-content">
  <SectionHeader title="Projects" subtitle="Notable projects I've worked on." />

  <!-- Example project card; update or add more as needed. -->
  <Card title="WIP Project" excerpt="will update" href="/projects/example" />
  </section>
  <div class="contact-section">
    <ContactBox />
  </div>
<style>
  .contact-section {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: center;
  }
</style>
