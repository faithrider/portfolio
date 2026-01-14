<script lang="ts">
  // Keep year computation in script so it's easy to stub or test later.
  const year = new Date().getFullYear();
  import githubLogo from '$lib/assets/github-logo.svg';
  import linkedinLogo from '$lib/assets/linkedin-logo.svg';
  import devpostLogo from '$lib/assets/devpost-logo.svg';
</script>

<footer class="site-footer">
  <style>
    :global(.dark-mode) .site-footer {
      background: #18181b;
      color: #f3f3f3;
    }
    :global(.dark-mode) .site-footer a,
    :global(.dark-mode) .site-footer p {
      color: #f3f3f3;
    }
    :global(.dark-mode) .site-footer img {
      filter: brightness(0.8) invert(0.9);
    }
  </style>
  <div class="flex flex-col items-center gap-2">
    <p>© {year} Faith Rider</p>
    <div class="flex items-center gap-4 mt-2">
      <a class="inline-flex" href="https://github.com/faithrider" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="GitHub" class="w-6 h-6" />
      </a>
      <a class="inline-flex" href="https://www.linkedin.com/in/faith-rider/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
        <img src={linkedinLogo} alt="LinkedIn" class="w-6 h-6" />
      </a>
      <a class="inline-flex" href="https://devpost.com/faithrider" aria-label="Devpost" target="_blank" rel="noopener noreferrer">
        <img src={devpostLogo} alt="Devpost" class="w-6 h-6" />
      </a>
    </div>
  </div>
</footer>