
<script lang="ts">
import ProjectCard from '$lib/components/ProjectCard.svelte';
import { projects, type Project } from './projects-data';
let filter: 'all' | 'cs' | 'nis' | 'other' = 'all';
let search = '';

$: filteredProjects = projects.filter(p =>
  (filter === 'all' || p.type === filter) &&
  p.title.toLowerCase().includes(search.trim().toLowerCase())
);
</script>

<section class="projects-list">
  <h1>Projects</h1>
  <p>Browse my hackathon, NIS, and other projects. Use the buttons below to filter by type, or search by project title.</p>
  <div class="project-controls">
    <div class="filter-buttons">
      <button on:click={() => filter = 'all'} class:active={filter === 'all'}>All</button>
      <button on:click={() => filter = 'cs'} class:active={filter === 'cs'}>CS/Hackathon</button>
      <button on:click={() => filter = 'nis'} class:active={filter === 'nis'}>NIS</button>
      <button on:click={() => filter = 'other'} class:active={filter === 'other'}>Other</button>
    </div>
    <input type="text" placeholder="Search by title..." bind:value={search} />
  </div>
  <div class="projects-grid">
    {#if filteredProjects.length === 0}
      <p style="margin-top:2rem;">No projects found.</p>
    {:else}
      {#each filteredProjects as project}
        <ProjectCard
          title={project.title}
          blurb={project.blurb}
          type={project.type}
          techStack={project.techStack}
          image={project.image}
          href={`/projects/list/${project.slug}.svx`}
        />
      {/each}
    {/if}
  </div>
</section>

<style>
.project-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;
}
.filter-buttons {
  display: flex;
  gap: 0.5rem;
}
.filter-buttons button {
  padding: 0.5rem 1.2rem;
  border-radius: 1rem;
  border: none;
  background: #eee;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}
.filter-buttons button.active, .filter-buttons button:hover {
  background: #2d2d2d;
  color: #fff;
}
input[type="text"] {
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
  min-width: 180px;
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: flex-start;
  margin-top: 2rem;
}
</style>
