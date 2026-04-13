<script lang="ts">
export let title: string;
export let blurb: string;
export let type: 'cs' | 'nis' | 'other';
export let techStack: string[] = [];
export let image: string = '';
export let href: string = '';
</script>

<a class="project-card {type}" href={href}>
  <div class="card-content">
    <h3>{title}</h3>
    <p>{blurb}</p>
    {#if techStack.length}
      <div class="tech-stack">
        {#each techStack as tech}
          <span>{tech}</span>
        {/each}
      </div>
    {/if}
  </div>
  {#if image}
    <img src={image} alt={title + ' image'} />
  {/if}
</a>

<style>
.project-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s, transform 0.2s;
  margin-bottom: 1.5rem;
  min-width: 220px;
  max-width: 350px;
}
.project-card:hover {
  box-shadow: 0 4px 18px rgba(0,0,0,0.13);
  transform: translateY(-2px) scale(1.02);
}
.project-card.cs {
  border-left: 6px solid #3b82f6;
}
.project-card.nis {
  border-left: 6px solid #10b981;
}
.project-card.other {
  border-left: 6px solid #f59e42;
}
.card-content h3 {
  margin: 0 0 0.5rem 0;
}
.card-content p {
  color: #444;
  margin-bottom: 0.5rem;
}
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.tech-stack span {
  background: #eee;
  border-radius: 0.5rem;
  padding: 0.2rem 0.7rem;
  font-size: 0.9em;
}
img {
  margin-top: 1rem;
  border-radius: 0.7rem;
  max-width: 100%;
  max-height: 120px;
  object-fit: cover;
}
</style>
