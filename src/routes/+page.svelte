<script lang="ts">
  // Use the shared Hero component
  import Hero from '$lib/components/Hero.svelte';
</script>

<!-- Single hero instance -->
<Hero title="welcome" />

<!-- Main page content -->
<section class="site-content">
  <section class="site-section">
    <h2>Hello! I'm Faith.</h2>
    <p>
      I recently graduated with a B.S. in Computer Science from the University of Cincinnati, and am currently an Analyst at <a href="https://www.bny.com/" target="_blank" rel="noopener noreferrer" style="color: #6B4F3A;">BNY</a> in New York City. I'm part of a two-year rotational program working on the Digital Assets Platform within the Market Transformation & Innovation Hub, bringing startup energy with the backing (and rigorous standards) of a global institution.
    </p>
    <p>
      I love building thoughtful projects that blend technology and design, exploring new tools, and tackling tricky problems. This site is a home for my technical work, photography, travels, and creative experiments. Feel free to explore!
    </p>
  </section>
  <section class="site-section">
    <h2>A bit more about me...</h2>
    <p>
      Beyond coding and my professional life in finance, I tend to describe myself as a lifelong learner and a creative. I've played many instruments (alto sax, bassoon, ukulele, and more!), and you can often find me doing live sketches in the various parks around Manhattan.
    </p>
    <p>
      I'm also an avid hobbyist photographer. I have a collection of some of my favorite shots in the <a href="/photography" style="color: #6B4F3A;">Photography</a> section of this site. Storytelling through images is an art form I'm slowly learning. They do say a picture is worth a thousand words! Though a thoughtful caption doesn't hurt sometimes.
    </p>

    <figure style="margin: 1rem 0 0;">
      <img src="/photography/london/faith-london-chinatown.jpg" alt="faith in london's chinatown" style="width: 100%; max-width: 1000px; border-radius: 8px; display: block;" />
      <figcaption style="margin-top: 0.5rem; color: #6b7280; font-size: 0.9rem; font-style: italic; text-align: center;">
        Oh look, a caption! Does the story tell you that we had been at this for 30 minutes in the rain?
      </figcaption>
    </figure>
  </section>
  
  <section class="site-section site-section--alt">
    <h2>About this site</h2>
    <p>This portfolio is fully coded by me. You can find the source code on my <a href="https://github.com/faithrider" target="_blank" rel="noopener noreferrer" style="color: #6B4F3A;">GitHub</a> (developers, I promise it's not only leetcode calculator apps). I started this portfolio halfway through my university years and have been iterating on it ever since.</p>
    
    <p>I have more of my work hosted on my <a href="https://devpost.com/faithrider" target="_blank" rel="noopener noreferrer" style="color: #6B4F3A;">Devpost</a> (hackathons), <a href="https://www.linkedin.com/in/faith-rider/" target="_blank" rel="noopener noreferrer" style="color: #6B4F3A;">LinkedIn</a> (professional, please connect!), and <a href="https://github.com/faithrider" target="_blank" rel="noopener noreferrer" style="color: #6B4F3A;">GitHub</a> (other projects). Also linked in the footer!</p>
  </section>

</section>
<!-- ContactBox now handled in layout -->
