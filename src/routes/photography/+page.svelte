<!-- Photography gallery page. Displays photos in grouped rows and handles modal view for details. -->
<script lang="ts">
  import PhotoCard from '$lib/components/PhotoCard.svelte';
  import PhotoModal from '$lib/components/PhotoModal.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import { photos, type Photo } from '$lib/data/photography';
  import ContactBox from '$lib/components/ContactBox.svelte';

  let selectedPhoto: Photo | null = null;
  let selectedTrip: string = 'All';

  // Get unique trip names from photos
  const tripOptions: string[] = ['All', ...Array.from(new Set(photos.map((p) => p.trip)))];

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

  // Filter photos by selected trip
  $: filteredPhotos = selectedTrip === 'All' ? photos : photos.filter((p) => p.trip === selectedTrip);
</script>


<section class="site-content routes-photography dark-mode" style="padding-top:0;">
  <div style="padding-top:1.25rem;">
    <SectionHeader title="Photography" subtitle="A collection of moments from my travels and experiences. Click a photo to see a better view and the story behind it." />
  </div>

  <div class="featured-project-outer">
    <a href="/photography/amazonia" class="featured-project-link">
      <span class="featured-label">Featured Project</span>
      <span class="featured-title">Textures of Amazonia →</span>
    </a>
  </div>

  <div class="trip-filter-outer">
    <div class="trip-filter-container">
      <label for="trip-filter" class="trip-filter-label">Sort by place/trip:</label>
      <select id="trip-filter" bind:value={selectedTrip} class="trip-filter-select">
        {#each tripOptions as trip}
          <option value={trip}>{trip}</option>
        {/each}
      </select>
    </div>
  </div>

  {#if filteredPhotos.length === 0}
    <div class="no-photos">No photos currently available for this trip.</div>
  {:else}
    {#each groupPhotos(filteredPhotos) as { row, columns }, i}
      <div class="photo-row" style="grid-template-columns: repeat({columns}, 1fr);">
        {#each row as photo (photo.id)}
          <PhotoCard {photo} onClickPhoto={openModal} />
        {/each}
      </div>
    {/each}
  {/if}
  </section>

  <!-- ContactBox now handled in layout -->

{#if selectedPhoto}
  <div class="modal-backdrop" on:click={closeModal} on:keydown={(e) => e.key === 'Escape' && closeModal()} role="presentation">
    <PhotoModal photo={selectedPhoto}>
      <button class="close-button" on:click={closeModal} aria-label="Close modal" slot="close">✕</button>
    </PhotoModal>
  </div>
{/if}

<style>
  .routes-photography {
    max-width: 100%;
    padding: 0;
    margin-top: 0;
    min-height: 100vh;
    padding-bottom: 3rem;
    background: #18181b;
    color: #f3f3f3;
  }

  .trip-filter-outer {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0 0.5rem 0;
  }

  .featured-project-outer {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }

  .featured-project-link {
    display: block;
    width: 100%;
    max-width: 600px;
    padding: 2rem;
    background: #2a2a32;
    border: 1.5px solid #444;
    border-radius: 0.75rem;
    text-decoration: none;
    transition: all 0.3s ease;
    text-align: center;
  }

  .featured-project-link:hover {
    background: #323239;
    border-color: #666;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  .featured-label {
    display: block;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #888;
    margin-bottom: 0.5rem;
  }

  .featured-title {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: #f3f3f3;
  }

  .trip-filter-outer {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0 0.5rem 0;
  }

  .trip-filter-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: #23232b;
    border: 1.5px solid #444;
    border-radius: 0.75rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    padding: 0.75rem 1.5rem;
    min-width: 260px;
  }
  .trip-filter-label {
    font-size: 1rem;
    font-weight: 500;
  }
  .trip-filter-select {
    font-size: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    background: #23232b;
    color: #f3f3f3;
    outline: none;
    transition: border 0.2s;
  }
  .trip-filter-select:focus {
    border: 1.5px solid #888;
  }
  .no-photos {
    text-align: center;
    margin: 2rem 0;
    font-size: 1.2rem;
    color: #aaa;
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
