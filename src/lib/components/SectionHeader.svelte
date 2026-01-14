<script lang="ts">
  export let title: string;
  export let subtitle: string;
</script>

<div class="section-header">
  <h2 class="heading">{title}</h2>
  <p class="subtext">{subtitle}</p>
</div>

<style>
  :global(.dark-mode) .section-header {
    color: #f3f3f3;
  }
  :global(.dark-mode) .section-header .heading {
    color: #f3f3f3;
  }
  :global(.dark-mode) .section-header .subtext {
    color: #b3b3b3;
  }
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .heading {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 3rem auto 1rem;
    max-width: 600px;
    padding: 0 2rem;
  }

  .subtext {
    font-size: 1.1rem;
    color: #666;
    margin: 0 auto;
    max-width: 600px;
    padding: 0 2rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .heading {
      font-size: 2rem;
      margin: 2rem auto 1rem;
    }

    .subtext {
      font-size: 1rem;
      padding: 0 1rem;
    }
  }

  @media (max-width: 480px) {
    .heading {
      font-size: 1.5rem;
      margin: 1.5rem auto 1rem;
      padding: 0 1rem;
    }

    .subtext {
      font-size: 0.95rem;
      padding: 0 1rem;
    }
  }
</style>
