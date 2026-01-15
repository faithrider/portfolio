<script lang="ts">
  import type { Photo } from '$lib/data/photography';

  export let photo: Photo;
  export let onClickPhoto: (photo: Photo) => void;
</script>

<div class="photo-column">
  <div class="photo-card" on:click={() => onClickPhoto(photo)} role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && onClickPhoto(photo)}>
    <img src={photo.imageThumb ?? photo.image} alt={photo.location} loading="lazy" />
    <div class="photo-overlay">
      <div class="photo-info">
        <h3 class="photo-location">{photo.location}</h3>
        <p class="photo-date">{photo.date}</p>
        <p class="photo-description">{photo.description}</p>
      </div>
    </div>
  </div>
</div>

<style>
  .photo-column {
    flex: calc(25% - 0.375rem);
    padding: 0 0.25rem;
    box-sizing: border-box;
  }

  .photo-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    aspect-ratio: 1;
    height: 100%;
  }

  .photo-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }

  .photo-card:hover img {
    transform: scale(1.05);
  }

  .photo-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 1.5rem;
    box-sizing: border-box;
    z-index: 2;
  }

  .photo-card:hover .photo-overlay {
    opacity: 1;
  }

  .photo-info {
    width: 100%;
    color: white;
  }

  .photo-location {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    color: #ffffff;
  }

  .photo-date {
    font-size: 0.9rem;
    color: #e0e0e0;
    margin: 0 0 0.75rem 0;
  }

  .photo-description {
    font-size: 0.95rem;
    color: #e8e8e8;
    line-height: 1.5;
    margin: 0;
  }

  @media (max-width: 768px) {
    .photo-overlay {
      padding: 1rem;
    }

    .photo-location {
      font-size: 1rem;
    }

    .photo-date {
      font-size: 0.8rem;
    }

    .photo-description {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    .photo-column {
      flex: calc(50% - 0.075rem);
    }

    .photo-overlay {
      padding: 0.75rem;
    }

    .photo-location {
      font-size: 0.95rem;
    }

    .photo-date {
      font-size: 0.75rem;
    }

    .photo-description {
      font-size: 0.8rem;
    }
  }
</style>
