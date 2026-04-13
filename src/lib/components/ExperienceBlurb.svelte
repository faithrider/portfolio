<script lang="ts">
export let company: string;
export let location: string;
export let jobTitle: string;
export let time: string;
export let description: string;
export let href: string = '';
</script>

<a class="experience-blurb" href={href}>
  <div class="blurb-header">
    <h3>{jobTitle}</h3>
    <span class="company">{company}</span>
    <span class="location">{location}</span>
    <span class="time">{time}</span>
  </div>
  <p>{description}</p>
</a>

<style>
.experience-blurb {
  display: block;
  background: #f7f7f7;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s, transform 0.2s;
}
.experience-blurb:hover {
  box-shadow: 0 4px 18px rgba(0,0,0,0.13);
  transform: translateY(-2px) scale(1.02);
}
.blurb-header {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: baseline;
  margin-bottom: 0.5rem;
}
.company {
  font-weight: bold;
  color: #3b82f6;
}
.location {
  color: #888;
}
.time {
  color: #10b981;
  font-size: 0.95em;
}
</style>
