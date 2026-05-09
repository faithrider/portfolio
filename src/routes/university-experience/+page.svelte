<script lang="ts">
  import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<section class="site-content routes-university-experience">
  <SectionHeader
    title="University Experience"
    subtitle="Five transformative years at the University of Cincinnati"
  />

  <div class="flex flex-col gap-8">
    <!-- Main intro section -->
    <section class="intro-section">
      <h2>About My Time at UC</h2>
      <p>
        I spent five years at the University of Cincinnati pursuing my Bachelor's degree in
        Computer Science, graduated in May 2026. Beyond the classroom, these years shaped my
        perspective on creativity, problem-solving, and how technology intersects with human experience.
      </p>
      <p>
        UC challenged me to think deeply about collaborative development, the importance of intentionality, and the real-world
        impact of the work we create. I engaged with coursework in algorithms, systems design, web development, and more—but
        honestly, some of my best learning happened outside traditional CS classes.
      </p>
      <p>
        The sections described here were facilitated through UC's Honors College, and highlight some of the most formative experiences and reflections from my time at UC,
        particularly those outside my typical core CS coursework. These experiences deeply influenced my outlook on life and work, and continue to shape my pursuits today.
      </p>
    </section>

    <!-- Navigation to detailed experiences -->
    <section class="experiences-nav">
      <h2>Dive Deeper Into My UC Journey</h2>
      <div class="experience-cards">
        <a href="/university-experience/year-in-review" class="experience-card">
          <h3>Year in Review</h3>
          <p>Reflections from each of my five years in university. Personal growth, challenges overcome, and lessons learned along the way.</p>
          <span class="card-arrow">→</span>
        </a>

        <a href="/university-experience/honors-experiences" class="experience-card">
          <h3>Honors Program & Experiences</h3>
          <p>My notable college experiences through the Honors Program: special projects, collaborations, and opportunities that shaped my time at UC.</p>
          <span class="card-arrow">→</span>
        </a>
      </div>
    </section>
  </div>
</section>

<style>
  .intro-section,
  .experiences-nav {
    padding: 2rem 0;
  }

  .intro-section h2,
  .experiences-nav h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    margin-top: 0;
  }

  .intro-section p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    color: #4b3333;
  }

  .experience-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .experience-card {
    display: block;
    padding: 2rem;
    border: 1px solid #333;
    border-radius: 8px;
    background: #1a1a1a;
    transition: all 0.3s ease;
    text-decoration: none;
    color: inherit;
    position: relative;
  }

  .experience-card:hover {
    border-color: #6B4F3A;
    background: #242424;
    transform: translateY(-4px);
  }

  .experience-card h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    color: #f3f3f3;
  }

  .experience-card p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
    color: #b3b3b3;
  }

  .card-arrow {
    display: block;
    margin-top: 1.5rem;
    font-size: 1.5rem;
    color: #6B4F3A;
    transition: transform 0.3s ease;
  }

  .experience-card:hover .card-arrow {
    transform: translateX(8px);
  }
</style>
