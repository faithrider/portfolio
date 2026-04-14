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
  date?: string;
};

// ── Section 1: The Solimões ──────────────────────────────────────────────────
export const solimoesPhotos: AmazoniaPhoto[] = [

  { id: 's1', image: '/amazonia/BRAZIL-SOLIMOES-tire.jpg', caption: 'Rubber tires are fixed to the sides of boats as buffers, positioned at points of frequent contact. As smaller canoes approach larger vessels, these surfaces compress and absorb impact, reducing damage from repeated collisions. In sediment-heavy water, where visibility is low and movement is constant, these additions function as a simple but effective interface between materials.', device: 'Nikon Z5, 50-250mm', date: '8:08AM | 14 March 2026' },

  { id: 's2', image: '/amazonia/BRAZIL-SOLIMOES-canoe.jpg', caption: 'Mud adheres to the surface of a canoe pulled onto the bank, settling as the water’s motion slows. The boundary between river and land shifts regularly, and sediment is deposited and disturbed with each change in level. Surfaces retain these traces, showing recent interaction with the river.', device: 'Nikon Z5, 50-250mm', date: '8:38AM | 14 March 2026' },

  { id: 's3', image: '/amazonia/BRAZIL-SOLIMOES-ropes.jpg', caption: 'Ropes extend from the boat’s edge, used to secure canoes and maintain position along the river. Their tension shifts with the current, responding to changes in speed, direction, and water level. In this setting, connection points remain flexible, allowing structures and vessels to adjust rather than resist movement.', device: 'Nikon Z5, 50-250mm', date: '6:35AM | 14 March 2026' },

  { id: 's4', image: '/amazonia/BRAZIL-SOLIMOES-oar.jpg', caption: 'A painted oar, chipped from use, rests within reach, used when motors are impractical or too disruptive. In shallow areas or near other boats, manual propulsion provides more controlled movement. The continued use of paddles reflects the need for precision in a river where depth and flow can vary over short distances.', device: 'Nikon Z5, 50-250mm', date: '7:17AM | 14 March 2026' },

  { id: 's5', image: '/amazonia/BRAZIL-SOLIMOES-treeline.jpg', caption: 'A visible line marks a previous water level on the trunk. Seasonal flooding raises the river several meters, submerging areas that are dry at other times of year. These markings remain as records of past conditions, indicating the vertical range of the river’s cycle.', device: 'Nikon Z5, 50-250mm', date: '8:17AM | 14 March 2026' },

  { id: 's6', image: '/amazonia/BRAZIL-SOLIMOES-porch.jpg', caption: 'Homes are often positioned directly along the river’s edge, or in high tide, atop the water’s surface. They are oriented toward water as the primary route of movement. Entry points, platforms, and openings face the river, reflecting its role in daily transport and access.', device: 'Nikon Z5, 50-250mm', date: '10:51AM | 14 March 2026' },

  { id: 's7', image: '/amazonia/BRAZIL-SOLIMOES-canoegreen.jpg', caption: 'Boats serve as the primary means of movement along the river, adapted in size and form to different uses. Shallow drafts allow navigation in variable depths, while durable hulls withstand contact with sediment and debris carried in the current. Most boats are propelled by motors attached to the back, and manually steered with a handle.', device: 'Nikon Z5, 50-250mm', date: '8:05AM | 15 March 2026' },

  { id: 's8', image: '/amazonia/BRAZIL-SOLIMOES-rockwater.jpg', caption: 'Rock along the riverbank shows orange-brown staining from iron-rich sediments. These materials originate in the Andes Mountains and are transported downstream as fine particles. Over time, deposition and oxidation alter the surface appearance of exposed stone. Nearly 90% of all sedmient in the Amazon originates from the Andes, although such as in this image, some is picked up along the river.', device: 'Nikon Z5, 50-250mm', date: '12:53PM | 15 March 2026' },

  { id: 's9', image: '/amazonia/BRAZIL-SOLIMOES-stilthouse.jpg', caption: 'A house stands set back from the riverbank, separated from the water under mid-level conditions. During the high-water season, the river advances across the floodplain, extending much closer to the structure. This shifting edge reflects the annual rise and fall of the Solimões, where distance to the water is not fixed but varies over time.', device: 'Nikon Z5, 50-250mm', date: '7:30AM | 15 March 2026' },

  { id: 's10', image: '/amazonia/BRAZIL-SOLIMOES-waterlily.jpg', caption: 'The underside of a giant water lily reveals a rigid network of veins that supports the leaf at the surface. In the slower channels of the Igarapé Xiboreninha, near the confluence of the Rio Solimões and Rio Negro, floating plants accumulate and remain stable, forming dense surface cover where current is reduced and organic material is abundant.', device: 'Nikon Z5, 50-250mm', date: '4:20PM | 14 March 2026' },

];


// ── Interlude: The Wedding of the Waters ─────────────────────────────────────
export const weddingPhotos: AmazoniaPhoto[] = [
  { id: 'w1', image: '/amazonia/BRAZIL-WEDDING-waters.jpg', caption: 'At the Meeting of Waters, sediment-rich flow from the Solimões River meets the darker, low-sediment water of the Rio Negro. Differences in speed, temperature, and density limit immediate mixing, producing a visible boundary where suspended particles remain unevenly distributed. At close range, this separation appears as interlocking currents rather than a uniform blend.', device: 'Nikon Z5, 50-250mm', date: '11:57AM | 14 March 2026' },

  { id: 'w2', image: '/amazonia/BRAZIL-bridge-water.jpg', caption: 'The Rio Negro Bridge spans the river just upstream of the Meeting of Waters, linking Manaus to Iranduba. Often described as a “bridge to nowhere,” it provides one of the few fixed crossings in a region where movement is primarily river-based and large-scale road networks remain limited. Studies following its construction have documented increased deforestation associated with expanded access, extending its impact beyond the river channel.', device: 'Nikon Z5, 50-250mm', date: '2:49PM | 16 March 2026' },
];

// ── Section 2: The Rio Negro ─────────────────────────────────────────────────
export const negroPhotos: AmazoniaPhoto[] = [
  // FIXME: Replace with actual Rio Negro photo
  { id: 'n1', image: '/amazonia/BRAZIL-rio-negro.jpg', caption: 'FIXME: Add caption.', device: 'Nikon Z5, 50-250mm', date: '8:08AM | 14 March 2026' },
  // FIXME: Replace with actual Rio Negro photo
  { id: 'n2', image: '/amazonia/BRAZIL-rio-negro.jpg', caption: 'FIXME: Add caption.', device: 'Nikon Z5, 50-250mm', date: '8:08AM | 14 March 2026' },
  // FIXME: Replace with actual Rio Negro photo
  { id: 'n3', image: '/amazonia/BRAZIL-rio-negro.jpg', caption: 'FIXME: Add caption.', device: 'Nikon Z5, 50-250mm', date: '8:08AM | 14 March 2026' },
];
