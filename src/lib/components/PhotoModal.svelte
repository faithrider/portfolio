<script lang="ts">
  import type { Photo } from '$lib/data/photography';

  export let photo: Photo;

  let imageWidth = 0;
  let imageHeight = 0;

  function onImageLoad(e: Event) {
    const img = e.target as HTMLImageElement;
    imageWidth = img.naturalWidth;
    imageHeight = img.naturalHeight;
  }

  $: isHorizontal = imageWidth >= imageHeight;
</script>

<div class="modal-content" class:vertical={!isHorizontal} role="dialog" aria-modal="true" aria-label="Photo details">
  <slot name="close" />
  <img src={photo.image} alt={photo.location} class="modal-image" on:load={onImageLoad} />
  <div class="modal-info">
    <h3 class="modal-location">{photo.location}</h3>
    <p class="modal-date">{photo.date}</p>
    <p class="modal-description">{photo.description}</p>
  </div>
</div>

<style>
  .modal-content {
    background-color: white;
    border-radius: 8px;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    overflow: auto;
    position: relative;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    pointer-events: auto;
    gap: 0;
  }

  .modal-content.vertical {
    flex-direction: row;
    gap: 0;
  }

  .modal-image {
    width: 100%;
    height: auto;
    max-height: 70vh;
    object-fit: contain;
    display: block;
  }

  .modal-content.vertical .modal-image {
    max-height: 90vh;
    width: auto;
    max-width: 60%;
    flex-shrink: 0;
  }

  .modal-info {
    padding: 2rem;
    color: #333;
  }

  .modal-content.vertical .modal-info {
    padding: 2rem;
    overflow-y: auto;
    flex: 1;
    min-width: 0;
  }

  .modal-location {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    color: #000;
  }

  .modal-date {
    font-size: 1rem;
    color: #666;
    margin: 0 0 1rem 0;
  }

  .modal-description {
    font-size: 1.05rem;
    color: #555;
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 768px) {
    .modal-info {
      padding: 1.5rem;
    }

    .modal-location {
      font-size: 1.25rem;
    }

    .modal-date {
      font-size: 0.95rem;
    }

    .modal-description {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .modal-content {
      border-radius: 4px;
    }

    .modal-image {
      max-height: 60vh;
    }

    .modal-info {
      padding: 1rem;
    }

    .modal-location {
      font-size: 1.1rem;
    }

    .modal-date {
      font-size: 0.9rem;
    }

    .modal-description {
      font-size: 0.95rem;
    }
  }
</style>
