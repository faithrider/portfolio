<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import ContactBox from '$lib/components/ContactBox.svelte';
  import ProjectModal from '$lib/components/ProjectModal.svelte';
  import { projects } from '$lib/data/projects';

  let selectedProject: any = null;

  // Category filtering
  let selectedCategory: string = 'All';

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  // Featured projects (exclude from main grid)
  $: featured = projects.filter((p) => p.featured);

  // Filtered projects for grid
  $: filtered =
    selectedCategory === 'All'
      ? projects.filter((p) => !p.featured)
      : projects.filter((p) => p.category === selectedCategory && !p.featured);

  // Map category slug to display name
  const categoryLabels: Record<string, string> = {
    coding: 'Coding',
    nis: 'NIS Client',
    other: 'Other',
  };

  function openModal(project: any) {
    selectedProject = project;
  }

  function closeModal() {
    selectedProject = null;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') closeModal();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="site-content">
  <SectionHeader title="Projects" subtitle="Notable projects I've worked on." />

  <!-- Featured Projects Section -->
  {#if featured.length > 0}
    <div class="featured-section">
      {#each featured as project}
        <div class="featured-banner" style="background-image: url('{project.image || '/projects/placeholder.jpg'}');">
          <div class="featured-overlay"></div>
          <div class="featured-content">
            <p class="featured-label">Featured Project</p>
            <h2 class="featured-title">{project.title}</h2>
            <p class="featured-excerpt">{project.excerpt}</p>
            <button class="featured-link" on:click={() => openModal(project)}>
              View Details →
            </button>
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <!-- Category Filters -->
  <div class="filter-section">
    <div class="filter-buttons">
      {#each categories as category}
        <button
          class="filter-btn"
          class:filter-btn--active={selectedCategory === category}
          on:click={() => { selectedCategory = category; }}
        >
          {category === 'All' ? 'All Projects' : categoryLabels[category] || category}
        </button>
      {/each}
    </div>
  </div>

  <!-- Projects Grid -->
  <div class="projects-grid">
    {#each filtered as project}
      <div class="project-card">
        <button class="card-content" on:click={() => openModal(project)}>
          <h3 class="project-title">{project.title}</h3>
          <p class="project-excerpt">{project.excerpt}</p>
          {#if project.category === 'coding' && project.technologies.length > 0}
            <div class="project-tags">
              {#each project.technologies as tech}
                <span class="tech-tag">{tech}</span>
              {/each}
            </div>
          {/if}
          <span class="expand-hint">View details →</span>
        </button>
      </div>
    {/each}
  </div>
</section>

{#if selectedProject}
  <div class="modal-backdrop" on:click={closeModal} on:keydown={(e) => e.key === 'Escape' && closeModal()} role="presentation">
    <ProjectModal project={selectedProject}>
      <button class="close-button" on:click={closeModal} aria-label="Close modal" slot="close">✕</button>
    </ProjectModal>
  </div>
{/if}

<style>
  .featured-section {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    margin-bottom: 3rem;
  }

  .featured-banner {
    position: relative;
    width: 100%;
    height: 60vh;
    min-height: 400px;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }

  .featured-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    z-index: 1;
  }

  .featured-content {
    position: relative;
    z-index: 2;
    padding: 3rem;
    max-width: 600px;
    color: white;
  }

  .featured-label {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.8);
    margin: 0 0 0.5rem 0;
  }

  .featured-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    line-height: 1.2;
  }

  .featured-excerpt {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.95);
    margin: 0 0 1.5rem 0;
    line-height: 1.6;
  }

  .featured-link {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: white;
    color: #1f2937;
    border: none;
    text-decoration: none;
    font-weight: 600;
    border-radius: 0.375rem;
    transition: opacity 0.3s;
    cursor: pointer;
    font-family: inherit;
    font-size: 1rem;
  }

  .featured-link:hover {
    opacity: 0.85;
  }

  .filter-section {
    margin: 2rem 0;
    display: flex;
    justify-content: center;
  }

  .filter-buttons {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .filter-btn {
    padding: 0.5rem 1.25rem;
    border: 1px solid var(--border-color, #d1d5db);
    border-radius: 0.375rem;
    background: transparent;
    color: var(--text-primary, #1f2937);
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .filter-btn:hover {
    border-color: var(--text-primary, #1f2937);
  }

  .filter-btn--active {
    background: var(--text-primary, #1f2937);
    color: white;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .project-card {
    position: relative;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.5rem;
    border: 1px solid #d1d5db;
    border-radius: 0.75rem;
    background: white;
    color: #1f2937;
    text-align: left;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
  }

  .card-content:hover {
    border-color: #1f2937;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .project-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    color: #1f2937;
  }

  .project-excerpt {
    font-size: 0.95rem;
    color: #6b7280;
    margin: 0 0 1rem 0;
    flex-grow: 1;
  }

  .expand-hint {
    display: inline-block;
    font-size: 0.875rem;
    color: #3b82f6;
    font-weight: 500;
    margin-top: auto;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.75rem;
    padding: 0 0.25rem;
  }

  .tech-tag {
    display: inline-block;
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    background: var(--surface-hover, #f3f4f6);
    color: var(--text-secondary, #6b7280);
    border-radius: 0.25rem;
  }

  /* Modal Styles */
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 2rem;
    box-sizing: border-box;
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #1f2937;
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
    transition: all 0.2s ease;
  }

  .close-button:hover {
    background-color: #111827;
    transform: rotate(90deg);
  }

  @media (max-width: 640px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }

    .filter-buttons {
      gap: 0.5rem;
    }

    .filter-btn {
      padding: 0.4rem 1rem;
      font-size: 0.9rem;
    }
  }
</style>
