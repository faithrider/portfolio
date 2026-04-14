<script lang="ts">
  import { onMount } from 'svelte';
  import { solimoesPhotos, weddingPhotos, negroPhotos } from '$lib/data/amazonia';
  import type { AmazoniaPhoto } from '$lib/data/amazonia';

  // ── Parallax ─────────────────────────────────────────────────────────────
  let scrollY = 0;
  let chapterEls: (HTMLElement | undefined)[] = [undefined, undefined, undefined];

  function applyParallax() {
    chapterEls.forEach((el) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inner = el.querySelector('.az-chapter-bg-inner') as HTMLElement | null;
      if (!inner) return;
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.18;
      inner.style.transform = `translateY(${offset}px)`;
    });
  }

  onMount(() => {
    window.addEventListener('scroll', applyParallax, { passive: true });
    applyParallax();
    return () => window.removeEventListener('scroll', applyParallax);
  });

  // ── Photo modal ───────────────────────────────────────────────────────────
  let modalPhoto: AmazoniaPhoto | null = null;
  let modalImageWidth = 0;
  let modalImageHeight = 0;

  function openModal(photo: AmazoniaPhoto) {
    modalPhoto = photo;
    modalImageWidth = 0;
    modalImageHeight = 0;
  }

  function closeModal() {
    modalPhoto = null;
  }

  function onModalImageLoad(e: Event) {
    const img = e.target as HTMLImageElement;
    modalImageWidth = img.naturalWidth;
    modalImageHeight = img.naturalHeight;
  }

  $: modalIsHorizontal = modalImageWidth >= modalImageHeight;

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') closeModal();
  }
</script>

<svelte:window bind:scrollY on:keydown={handleKeydown} />

<!-- Outer page wrapper -->
<div class="az-page">

  <!-- ── Hero ───────────────────────────────────────────────────────────── -->
  <section class="az-hero">
    <div class="az-hero-bg" style="transform: translateY({scrollY * 0.38}px)"></div>
    <div class="az-hero-overlay"></div>
    <div class="az-hero-content">
      <a href="/photography" class="az-back-link">← Photography</a>
      <p class="az-eyebrow">A Photo Essay</p>
      <h1 class="az-title">Textures of Amazonia</h1>
      <p class="az-subtitle">Water, Material, and Adaptation Along the Amazon River</p>
    </div>
  </section>

  <!-- ── Intro ──────────────────────────────────────────────────────────── -->
  <section class="az-intro-section">
    <div class="az-intro-box">
      <p class="az-intro-text">
        The Amazon River stretches over 4,000 miles across South America, winding through dense rainforest and supporting one of the most biodiverse ecosystems on Earth.
      </p>
      <p class="az-intro-text">
        For millenia, it has been a vital artery for transportation, sustenance, and culture for the people who call its banks home.
      </p>

      <p class="az-intro-text">
        Life itself has adapted to the rhythms of the river. Its floods and droughts, its shifting channels, and its seasonal cycles.
      </p>

      <p class="az-intro-text">
        This photo essay explores the textures of Amazonia: how man and nature have adapted to the Amazon River.
      </p>
    </div>
  </section>

  <!-- ════════════════════════════════════════════════════════════════════
       CHAPTER 1 — THE SOLIMÕES
  ═════════════════════════════════════════════════════════════════════ -->

  <section class="az-chapter" bind:this={chapterEls[0]}>
    <div class="az-chapter-bg-inner" style="background: url('/amazonia/BRAZIL-solimoes.jpg') center/cover no-repeat;"></div>
    <div class="az-chapter-overlay"></div>
    <div class="az-chapter-content">
      <p class="az-chapter-label">Chapter I</p>
      <h2 class="az-chapter-title">The Rio Solimões</h2>
      <p class="az-chapter-body">
        From the Peruvian border to the Rio Negro confluence near Manaus, the Amazon is known as the Solimões.
        The Solimões carries a dense load of fine Andean sediments—clays, silts, and mineral fragments ground from young mountain rock—giving the river its characteristic pale, opaque 'white water' appearance.
      </p>
    </div>
  </section>

  <!-- Story photos — Solimões -->
  <div class="az-story-section">
    {#each solimoesPhotos as photo, i}
      <div class="az-story-item" class:az-story-item--reverse={i % 2 === 1}>
        <button class="az-story-photo" on:click={() => openModal(photo)} aria-label="View photo">
          <img src={photo.image} alt={photo.caption} loading="lazy" />
        </button>
        <div class="az-story-caption">
          <p class="az-story-caption-text">{photo.caption}</p>
          <p class="az-story-date">{photo.date}</p>
          {#if photo.device}
            <p class="az-story-device">Taken on: {photo.device}</p>
          {/if}
        </div>
      </div>
    {/each}
  </div>

  <!-- ════════════════════════════════════════════════════════════════════
       INTERLUDE — WEDDING OF THE WATERS
  ═════════════════════════════════════════════════════════════════════ -->

  <section class="az-chapter" bind:this={chapterEls[1]}>
    <div class="az-chapter-bg-inner" style="background: url('/amazonia/BRAZIL-bridge-water.jpg') center bottom/cover no-repeat;"></div>
    <div class="az-chapter-overlay"></div>
    <div class="az-chapter-content">
      <p class="az-chapter-label">Interlude</p>
      <h2 class="az-chapter-title">Encontro das Águas<br>The Wedding of the Waters</h2>
      <p class="az-chapter-body">
        Where the sediment-heavy Solimões River meets the dark, acidic Rio Negro, the two flow side by side without mixing.
        The Solimões moves faster, about 4 to 6 km/h, while the Rio Negro flows at a lethargic 2 km/h, and their pH differs, near neutral versus strongly acidic.
        These contrasts keep the pale and dark waters separate for miles.
      </p>
    </div>
  </section>

  <!-- Story photos — Wedding of the Waters -->
  <div class="az-story-section">
    {#each weddingPhotos as photo, i}
      <div class="az-story-item" class:az-story-item--reverse={i % 2 === 1}>
        <button class="az-story-photo" on:click={() => openModal(photo)} aria-label="View photo">
          <img src={photo.image} alt={photo.caption} loading="lazy" />
        </button>
        <div class="az-story-caption">
          <p class="az-story-caption-text">{photo.caption}</p>
          <p class="az-story-date">{photo.date}</p>
          {#if photo.device}
            <p class="az-story-device">Taken on: {photo.device}</p>
          {/if}
        </div>
      </div>
    {/each}
  </div>

  <!-- ════════════════════════════════════════════════════════════════════
       CHAPTER 2 — THE RIO NEGRO
  ═════════════════════════════════════════════════════════════════════ -->

  <section class="az-chapter" bind:this={chapterEls[2]}>
    <div class="az-chapter-bg-inner" style="background: url('/amazonia/BRAZIL-rio-negro.jpg') center top/cover no-repeat;"></div>
    <div class="az-chapter-overlay"></div>
    <div class="az-chapter-content">
      <p class="az-chapter-label">Chapter II</p>
      <h2 class="az-chapter-title">The Rio Negro</h2>
      <p class="az-chapter-body">
             Rising in the ancient, heavily weathered rocks of the Guiana Shield, the Rio Negro carries almost no sediment.
             Instead, its dark color comes from dissolved organic matter, tannins leached from decaying forest vegetation, giving the river its clear, acidic blackwater character.
      </p>
    </div>
  </section>

  <!-- Story photos — Rio Negro -->
  <div class="az-story-section">
    {#each negroPhotos as photo, i}
      <div class="az-story-item" class:az-story-item--reverse={i % 2 === 1}>
        <button class="az-story-photo" on:click={() => openModal(photo)} aria-label="View photo">
          <img src={photo.image} alt={photo.caption} loading="lazy" />
        </button>
        <div class="az-story-caption">
          <p class="az-story-caption-text">{photo.caption}</p>
          <p class="az-story-date">{photo.date}</p>
          {#if photo.device }
            <p class="az-story-device">Taken on: {photo.device}</p>
          {/if}
        </div>
      </div>
    {/each}
  </div>

  <!-- ── Closing ───────────────────────────────────────────────────────── -->
  <section class="az-closing-section">
    <div class="az-closing-box">
      <p class="az-closing-text">
        <!-- FIXME: Final words — the importance of water to Amazonas. The rivers
             are highways, food sources, ecosystems, and cultural anchors. What did
             seeing it up close change in how you understand the place? -->
        FIXME: Talk about how important water is to Amazonas: economically, ecologically, culturally.
      </p>
    </div>
    <p class="az-closing-note">
      More photographs from this trip (including wildlife) can be found in my main
      <a href="/photography">Photography</a> section.
    </p>
  </section>

</div><!-- end .az-page -->

<!-- ── Modal ──────────────────────────────────────────────────────────────── -->
{#if modalPhoto}
  <div class="az-modal-backdrop" on:click={closeModal} role="presentation">
    <!-- svelte-ignore a11y_interactive_supports_focus -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div
      class="az-modal-content"
      class:az-modal-content--vertical={!modalIsHorizontal}
      role="dialog"
      aria-modal="true"
      on:click|stopPropagation
    >
      <button class="az-modal-close" on:click={closeModal} aria-label="Close">✕</button>
      <img
        src={modalPhoto.image}
        alt={modalPhoto.caption}
        class="az-modal-image"
        on:load={onModalImageLoad}
      />
      <div class="az-modal-info">
        <p class="az-modal-caption">{modalPhoto.caption}</p>
        <p class="az-story-date">{modalPhoto.date}</p>
        {#if modalPhoto.device}
          <p class="az-modal-device">Taken on: {modalPhoto.device}</p>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  /* ── Page wrapper — covers the full layout in dark ──────────────────────── */
  .az-page {
    background: #0f1923;
    width: 100%;
    min-height: 100vh;
  }

  :global(body),
  :global(.site-layout) {
    background: #0f1923 !important;
  }

  /* ── Hero ──────────────────────────────────────────────────────────────── */
  .az-hero {
    position: relative;
    height: 100vh;
    min-height: 560px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #0a1628;
  }

  .az-hero-bg {
    position: absolute;
    inset: -20%;
    background: url('/amazonia/BRAZIL-bridge-water.jpg') center/cover no-repeat;
    will-change: transform;
  }

  .az-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(10,22,40,0.2) 0%, rgba(10,22,40,0.65) 100%);
  }

  .az-hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 2rem 3rem;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  .az-back-link {
    color: #243c4b;
    text-decoration: none;
    font-size: 0.9rem;
    letter-spacing: 0.05em;
    margin-bottom: 2.5rem;
    transition: color 0.2s;
  }

  .az-back-link:hover {
    color: #4e738e;
  }

  .az-eyebrow {
    font-size: 0.78rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #243c4b;
    margin: 0 0 1.25rem;
  }

  .az-title {
    font-size: clamp(2.4rem, 6vw, 4.5rem);
    font-weight: 800;
    color: #e8f0f7;
    margin: 0 0 1rem;
    line-height: 1.15;
    letter-spacing: -0.01em;
  }

  .az-subtitle {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: #8aa8c0;
    margin: 0;
    font-style: italic;
    line-height: 1.55;
  }

  /* ── Intro ─────────────────────────────────────────────────────────────── */
  .az-intro-section {
    width: 100%;
    padding: 5rem 2rem;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }

  .az-intro-box {
    max-width: 680px;
    width: 100%;
    background: #162333;
    border: 1px solid #2a3f55;
    border-radius: 4px;
    padding: 2.5rem 3rem;
  }

  .az-intro-text {
    font-size: 1.1rem;
    color: #b8cfde;
    line-height: 1.85;
    margin: 0 0 1.5rem 0;
  }

  /* ── Chapter headers (parallax) ────────────────────────────────────────── */
  .az-chapter {
    position: relative;
    min-height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
  }

  .az-chapter-bg-inner {
    position: absolute;
    inset: -30%;
    will-change: transform;
    background-size: cover;
    background-position: center;
  }

  .az-chapter-overlay {
    position: absolute;
    inset: 0;
    background: rgba(10, 20, 34, 0.72);
  }

  .az-chapter-content {
    position: relative;
    z-index: 2;
    max-width: 900px;
    padding: 4rem 3rem;
    text-align: center;
  }

  .az-chapter-label {
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #5ba8c4;
    margin: 0 0 0.75rem;
  }

  .az-chapter-title {
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 700;
    color: #e8f0f7;
    margin: 0 0 1.5rem;
    line-height: 1.15;
  }

  .az-chapter-body {
    font-size: 1.05rem;
    color: #9ab8cc;
    line-height: 1.8;
    margin: 0;
  }

  /* ── Story section ─────────────────────────────────────────────────────── */
  /* Full-width wrapper holds the background; inner is constrained */
  .az-story-section {
    width: 100%;
    padding: 3rem 5rem 4rem;
    box-sizing: border-box;
  }

  .az-story-item {
    display: flex;
    align-items: center;
    gap: 4rem;
    margin: 5rem 0;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .az-story-item--reverse {
    flex-direction: row-reverse;
  }

  .az-story-photo {
    flex: 0 0 65%;
    position: relative;
    cursor: pointer;
    border: none;
    padding: 0;
    background: none;
    overflow: hidden;
    display: block;
  }

  .az-story-photo img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.4s ease;
  }

  .az-story-photo:hover img {
    transform: scale(1.03);
  }

  .az-story-caption {
    flex: 1;
    min-width: 0;
  }

  .az-story-caption-text {
    font-size: 1.05rem;
    color: #b0c8dc;
    line-height: 1.8;
    margin: 0 0 0.75rem;
  }

  .az-story-date {
    flex: 1;
    min-width: 0;
    color: #5a7a90;
  }

  .az-story-device {
    font-size: 0.85rem;
    color: #5a7a90;
    font-style: italic;
    margin: 0;
  }

  /* ── Closing ───────────────────────────────────────────────────────────── */
  .az-closing-section {
    width: 100%;
    padding: 5rem 2rem 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    box-sizing: border-box;
  }

  .az-closing-box {
    max-width: 680px;
    width: 100%;
    background: #162333;
    border: 1px solid #2a3f55;
    border-radius: 4px;
    padding: 2.5rem 3rem;
  }

  .az-closing-text {
    font-size: 1.1rem;
    color: #b8cfde;
    line-height: 1.85;
    margin: 0;
  }

  .az-closing-note {
    font-size: 0.95rem;
    color: #5a7a90;
    text-align: center;
    margin: 0;
  }

  .az-closing-note a {
    color: #5ba8c4;
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color 0.2s;
  }

  .az-closing-note a:hover {
    color: #9ad0e8;
  }

  /* ── Modal ─────────────────────────────────────────────────────────────── */
  .az-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.88);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 2rem;
    box-sizing: border-box;
  }

  .az-modal-content {
    background: #fff;
    border-radius: 6px;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    overflow: auto;
    position: relative;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }

  .az-modal-content--vertical {
    flex-direction: row;
    max-width: 800px;
    min-width: 340px;
  }

  .az-modal-image {
    width: 100%;
    height: auto;
    max-height: 70vh;
    object-fit: contain;
    display: block;
  }

  .az-modal-content--vertical .az-modal-image {
    max-height: 90vh;
    width: auto;
    max-width: 60%;
    flex-shrink: 1;
  }

  .az-modal-info {
    padding: 2rem;
    color: #333;
  }

  .az-modal-content--vertical .az-modal-info {
    padding: 1.5rem;
    overflow-y: auto;
    flex: 1 1 0;
    min-width: 0;
  }

  .az-modal-caption {
    font-size: 1rem;
    color: #444;
    line-height: 1.65;
    margin: 0 0 0.75rem;
  }

  .az-modal-device {
    font-size: 0.85rem;
    color: #888;
    font-style: italic;
    margin: 0;
  }

  .az-modal-close {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: white;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  }

  .az-modal-close:hover {
    background: #f0f0f0;
    transform: rotate(90deg);
  }

  /* ── Responsive ────────────────────────────────────────────────────────── */
  @media (max-width: 900px) {
    .az-story-section {
      padding: 2rem 2.5rem 3rem;
    }
  }

  @media (max-width: 768px) {
    .az-story-item,
    .az-story-item.az-story-item--reverse {
      flex-direction: column;
      gap: 1.5rem;
    }

    .az-story-photo {
      flex: none;
      width: 100%;
    }

    .az-intro-box,
    .az-closing-box {
      padding: 1.75rem 1.5rem;
    }

    .az-chapter {
      min-height: 360px;
    }

    .az-modal-content--vertical {
      flex-direction: column;
    }

    .az-modal-content--vertical .az-modal-image {
      max-width: 100%;
      width: 100%;
      max-height: 55vh;
    }
  }

  @media (max-width: 480px) {
    .az-story-section {
      padding: 1.5rem 1.25rem 2rem;
    }

    .az-modal-backdrop {
      padding: 1rem;
    }

    .az-modal-close {
      width: 2rem;
      height: 2rem;
      font-size: 1.2rem;
    }
  }
</style>
