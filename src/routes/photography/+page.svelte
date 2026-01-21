  // Photography gallery page. Displays photos in grouped rows and handles modal view for details.
<script lang="ts">
  import PhotoCard from '$lib/components/PhotoCard.svelte';
  import PhotoModal from '$lib/components/PhotoModal.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import { photos, type Photo } from '$lib/data/photography';

  let selectedPhoto: Photo | null = null;

  function openModal(photo: Photo) {
    selectedPhoto = photo;
  }

  function closeModal() {
    selectedPhoto = null;
  }

  // Group photos into alternating rows of 3 and 4 for layout.
  function groupPhotos(photos: Photo[]) {
    const result: { row: Photo[]; columns: number }[] = [];
    let i = 0;
    let useThree = true;
    while (i < photos.length) {
      const columns = useThree ? 3 : 4;
      result.push({ row: photos.slice(i, i + columns), columns });
      i += columns;
      useThree = !useThree;
    }
    return result;
  }
</script>


<section class="site-content routes-photography dark-mode" style="padding-top:0;">
  <div style="padding-top:1.25rem;">
    <SectionHeader title="Photography" subtitle="A collection of moments from my travels and experiences. Click a photo to see a better view and the story behind it." />
  </div>

  {#each groupPhotos(photos) as { row, columns }, i}
    <div class="photo-row" style="grid-template-columns: repeat({columns}, 1fr);">
      {#each row as photo (photo.id)}
        <PhotoCard {photo} onClickPhoto={openModal} />
      {/each}
    </div>
  {/each}
</section>

{#if selectedPhoto}
  <div class="modal-backdrop" on:click={closeModal} on:keydown={(e) => e.key === 'Escape' && closeModal()} role="presentation">
    <PhotoModal photo={selectedPhoto}>
      <button class="close-button" on:click={closeModal} aria-label="Close modal" slot="close">✕</button>
    </PhotoModal>
  </div>
{/if}

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background: #18181b;
  }
  .dark-mode {
    background: #18181b;
    color: #f3f3f3;
  }
  .site-content {
    margin-top: 0;
    padding-top: 0;
  }
  .routes-photography {
    max-width: 100%;
    padding: 0;
    margin-top: 0;
    min-height: 100vh;
    padding-bottom: 3rem;
  }

  .photo-row {
    display: grid;
    gap: 0.5rem;
    padding: 0 2rem;
    margin-top: 2rem;
    margin-bottom: 2.5rem;
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
    background: white;
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
    background-color: #f0f0f0;
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {

    .modal-backdrop {
      padding: 1rem;
    }
  }

  @media (max-width: 480px) {

    .modal-backdrop {
      padding: 1rem;
    }

    .close-button {
      width: 2rem;
      height: 2rem;
      font-size: 1.25rem;
      top: 0.5rem;
      right: 0.5rem;
    }
  }
</style>
