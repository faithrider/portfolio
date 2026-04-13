<script lang="ts">
import ExperienceBlurb from '$lib/components/ExperienceBlurb.svelte';
import { workExperiences } from './work-data';
</script>

<section class="work-experience-list">
  <h1>Work Experience</h1>
  <p>Explore my professional journey, including roles, companies, and what I accomplished in each position.</p>
  <div class="experience-blurbs">
    {#each workExperiences as exp}
      <ExperienceBlurb
        company={exp.company}
        location={exp.location}
        jobTitle={exp.jobTitle}
        time={exp.time}
        description={exp.description}
        href={`/projects/work-experience/${exp.slug}`}
      />
    {/each}
  </div>
</section>
