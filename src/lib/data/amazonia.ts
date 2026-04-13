/*

Data for "Textures of Amazonia: Water, Material, and Adaptation Along the Amazon River"

This page is a narrative photo essay, not a standard gallery.
Photos are grouped by section to match the editorial structure of the page.

Image convention:
  Full:  /amazonia/<filename>.jpg
  Thumb: /amazonia/thumbnails/<filename>-thumb.jpg

Each photo has an editorial `caption` since this is a storytelling piece.

*/

export type AmazoniaPhoto = {
  id: string;
  image: string;
  caption: string;
  device?: string;
};

// ── Section 1: The Solimões ──────────────────────────────────────────────────
// White-water river. The Amazon/Solimões carries sediment from the Andes,
// giving it its distinctive brown-gold color.
export const solimoesPhotos: AmazoniaPhoto[] = [
  // FIXME: Replace with actual Solimões photo
  { id: 's1', image: '/greece-ferry-water.jpg', caption: 'FIXME: Add  caption.', device: 'Nikon Z5, 50-250mm' },
  // FIXME: Replace with actual Solimões photo
  { id: 's2', image: '/iceland-river.jpg', caption: 'FIXME: Add  caption.', device: 'Nikon Z5, 50-250mm' },
  // FIXME: Replace with actual Solimões photo
  { id: 's3', image: '/iceland-river2.jpg', caption: 'FIXME: Add  caption.', device: 'Nikon Z5, 50-250mm' },
];

// ── Section 2: The Wedding of the Waters ─────────────────────────────────────
// Where the Solimões (white water) and Rio Negro (black water) meet without
// mixing for several kilometers — one of the most striking natural phenomena
// in the Amazon basin.
export const weddingPhotos: AmazoniaPhoto[] = [
  // FIXME: Replace with actual Wedding of the Waters photo
  { id: 'w1', image: '/manhattan bridge.jpg', caption: 'FIXME: Add  caption.', device: 'Nikon Z5, 50-250mm' },
  // FIXME: Replace with actual Wedding of the Waters photo
  { id: 'w2', image: '/iceland-blacksandbeach.jpg', caption: 'FIXME: Add  caption.', device: 'Nikon Z5, 50-250mm' },
];

// ── Section 3: The Rio Negro ─────────────────────────────────────────────────
// Black-water river. Drains through the ancient Guiana Shield, picking up
// tannins from decaying vegetation — dark, acidic, and nearly sediment-free.
// This is the river the trip was centered on.
export const negroPhotos: AmazoniaPhoto[] = [
  // FIXME: Replace with actual Rio Negro photo
  { id: 'n1', image: '/sun rays.jpg', caption: 'FIXME: Add  caption.', device: 'Nikon Z5, 50-250mm' },
  // FIXME: Replace with actual Rio Negro photo
  { id: 'n2', image: '/iceland-highlands.jpg', caption: 'FIXME: Add  caption.', device: 'Nikon Z5, 50-250mm' },
  // FIXME: Replace with actual Rio Negro photo
  { id: 'n3', image: '/iceland-cover.jpg', caption: 'FIXME: Add  caption.', device: 'Nikon Z5, 50-250mm' },
];
