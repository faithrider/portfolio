<script lang="ts">
  export let project: any; // Project object with title, excerpt, description, etc.
</script>

<div class="project-modal">
  <div class="project-modal-content">
    <div class="project-header">
      <h2 class="project-title">{project.title}</h2>
      {#if project.category}
        <span class="project-category">{project.category}</span>
      {/if}
    </div>

    <div class="project-excerpt">
      {project.excerpt}
    </div>

    {#if project.description}
      <p class="project-description">
        {project.description}
      </p>
    {/if}

    {#if project.technologies && project.technologies.length > 0}
      <div class="project-tech">
        <strong>Built with:</strong>
        <div class="tech-list">
          {#each project.technologies as tech}
            <span class="tech-tag">{tech}</span>
          {/each}
        </div>
      </div>
    {/if}

    <div class="project-links">
      {#if project.link}
        <a href={project.link} class="project-btn primary" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      {/if}
      {#if project.github}
        <a href={project.github} class="project-btn secondary" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      {/if}
    </div>

    <slot name="close" />
  </div>
</div>

<style>
  .project-modal {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
  }

  .project-modal-content {
    padding: 2rem;
    background: white;
    border-radius: 0.75rem;
    color: #1f2937;
  }

  .project-header {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .project-title {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0;
    color: #1f2937;
  }

  .project-category {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.25rem 0.75rem;
    background: #f3f4f6;
    border-radius: 0.25rem;
    color: #6b7280;
    white-space: nowrap;
  }

  .project-excerpt {
    font-size: 1.1rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 1rem;
  }

  .project-description {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #6b7280;
    margin: 0 0 1.5rem 0;
  }

  .project-tech {
    margin: 1.5rem 0;
  }

  .project-tech strong {
    display: block;
    margin-bottom: 0.5rem;
    color: #1f2937;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-tag {
    display: inline-block;
    padding: 0.35rem 0.75rem;
    background: #f0f9ff;
    border: 1px solid #bfdbfe;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    color: #1e40af;
  }

  .project-links {
    display: flex;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }

  .project-btn {
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.2s ease;
    display: inline-block;
    text-align: center;
  }

  .project-btn.primary {
    background: #1f2937;
    color: white;
  }

  .project-btn.primary:hover {
    background: #111827;
  }

  .project-btn.secondary {
    background: #f3f4f6;
    color: #1f2937;
    border: 1px solid #d1d5db;
  }

  .project-btn.secondary:hover {
    background: #e5e7eb;
  }

  @media (max-width: 640px) {
    .project-modal-content {
      padding: 1.5rem;
    }

    .project-title {
      font-size: 1.5rem;
    }

    .project-links {
      flex-direction: column;
    }

    .project-btn {
      width: 100%;
    }
  }
</style>
