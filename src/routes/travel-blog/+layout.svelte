<!-- Travel blog layout: minimal wrapper that renders child routes.
		 This was previously an empty file which prevented the page content from
		 rendering. Keep this minimal — more blog-specific layout (sidebars,
		 filters) can be added later. -->
<script lang="ts">
	// No special props needed; layout simply passes through the slot.
</script>

<div class="site-content">
	<slot />
</div>
