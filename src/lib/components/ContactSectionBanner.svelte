<script lang="ts">
  import ContactBox from './ContactBox.svelte';
</script>

<div class="contact-section-bg">
  <div class="contact-section">
    <ContactBox />
  </div>
</div>

<style>
  .contact-section-bg {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    background: url('/thumbnails/london-plane-sunset-thumb.jpg') center/cover no-repeat;
    min-height: 420px;
    display: flex;
    align-items: center;
  }
  .contact-section-bg::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(35,35,43,0.72);
    z-index: 0;
  }
  .contact-section {
    margin: 2.5rem auto;
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    z-index: 1;
  }
</style>
