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

  { id: 's1', image: '/photography/brazil/BRAZIL-SOLIMOES-tire.jpg', caption: 'Rubber tires are fixed to the sides of boats as buffers, positioned at points of frequent contact. As smaller canoes approach larger vessels, these surfaces compress and absorb impact, reducing damage from repeated collisions. In sediment-heavy water, where visibility is low and movement is constant, these additions function as a simple but effective interface between materials.', device: 'Nikon Z5, 50-250mm', date: '8:08AM | 14 March 2026' },

  { id: 's2', image: '/photography/brazil/BRAZIL-SOLIMOES-canoe.jpg', caption: 'Mud clings to a canoe pulled onto the bank, settling as the water’s motion slows. The rise and fall of the river shifts the boundary between river and land, wherein sediment is deposited and disturbed with each change in level. Surfaces retain these traces, showing recent interaction with the river.', device: 'Nikon Z5, 50-250mm', date: '8:38AM | 14 March 2026' },

  { id: 's3', image: '/photography/brazil/BRAZIL-SOLIMOES-ropes.jpg', caption: 'Ropes extend from the boat’s edge, used to secure canoes and maintain position in the current. Their tension shifts with changes in speed, direction, and the pull of passing vessels. Along this stretch of river, very little is bolted in place. Most things are tied.', device: 'Nikon Z5, 50-250mm', date: '6:35AM | 14 March 2026' },

  { id: 's4', image: '/photography/brazil/BRAZIL-SOLIMOES-oar.jpg', caption: 'A painted oar, chipped from use, rests within reach. Motors handle most of the work on the main channel, but in shallower areas where depth can change dramatically over just a few meters, a paddle offers more precise control. The paint is worn down where the hand grips it, and where it makes contact with the water.', device: 'Nikon Z5, 50-250mm', date: '7:17AM | 14 March 2026' },

  { id: 's5', image: '/photography/brazil/BRAZIL-SOLIMOES-treeline.jpg', caption: 'A visible line marks a previous water level on the trunk. Seasonal flooding raises the river around 10 meters in this stretch of the river, submerging areas that are dry at other times of year. These markings remain as records of past conditions, indicating the vertical range of the river’s cycle.', device: 'Nikon Z5, 50-250mm', date: '8:17AM | 14 March 2026' },

  { id: 's6', image: '/photography/brazil/BRAZIL-SOLIMOES-porch.jpg', caption: 'Homes line the riverbank, or during high water, sit atop it entirely. They are oriented toward water as the primary route of movement. Entry points, platforms, and openings face the river, reflecting its role in daily transport and access. Many are painted in deep, saturated colors: the blue of the houses along this stretch is striking against the pale sediment-heavy water.', device: 'Nikon Z5, 50-250mm', date: '10:51AM | 14 March 2026' },

  { id: 's7', image: '/photography/brazil/BRAZIL-SOLIMOES-canoegreen.jpg', caption: 'Boats are the primary means of movement along the river, adapted in size and draft to particular stretches of water. Most run on outboard motors steered by hand, simple enough to maintain and repair with basic tools. The Solimões was commercially vital during the rubber boom of the late 19th and early 20th centuries, when steamships hauled raw latex downriver to Manaus and Belém. The boats are smaller now, but the underlying logic is the same.', device: 'Nikon Z5, 50-250mm', date: '8:05AM | 15 March 2026' },

  { id: 's8', image: '/photography/brazil/BRAZIL-SOLIMOES-rockwater.jpg', caption: 'Rock along the riverbank shows orange-brown staining from iron-rich sediments. These materials originate in the Andes Mountains and are transported downstream as fine particles. Over time, deposition and oxidation alter the surface appearance of exposed stone. Nearly 90% of all sedmient in the Amazon originates from the Andes, although such as in this image, some is picked up along the river.', device: 'Nikon Z5, 50-250mm', date: '12:53PM | 15 March 2026' },

  { id: 's9', image: '/photography/brazil/BRAZIL-SOLIMOES-stilthouse.jpg', caption: 'At mid-water season, the house sits well back from the river\’s edge. By May, at peak flood, that gap closes considerably as water pushes across the floodplain toward the foundation. Planting schedules, fishing techniques, and daily routines along the Solimões are tuned to which way the water is moving and how fast.', device: 'Nikon Z5, 50-250mm', date: '7:30AM | 15 March 2026' },

  { id: 's10', image: '/photography/brazil/BRAZIL-SOLIMOES-waterlily.jpg', caption: 'The underside of a Victoria amazonica leaf reveals a raised network of air-filled ribs that give the pad its buoyancy. Leaves can reach up to 3 meters across, and sharp spines covering the underside deter herbivorous fish from feeding on them. In the slow channels of the Igarapé Xiboreninha, near the Meeting of Waters, the pads cluster into dense mats, blocking enough sunlight that very little else is able to grow beneath them. The species was named after Queen Victoria in 1837, though it had been growing in the Amazon basin long before European botanists arrived to describe it.', device: 'Nikon Z5, 50-250mm', date: '4:20PM | 14 March 2026' },

];


// ── Interlude: The Wedding of the Waters ─────────────────────────────────────
export const weddingPhotos: AmazoniaPhoto[] = [
  { id: 'w1', image: '/photography/brazil/BRAZIL-WEDDING-waters.jpg', caption: "At the Meeting of Waters, sediment-rich flow from the Solimões River meets the darker, low-sediment water of the Rio Negro. Differences in speed, temperature, and density limit immediate mixing, producing a visible boundary where suspended particles remain unevenly distributed. At close range, this separation appears as interlocking currents rather than a uniform blend.", device: 'Nikon Z5, 50-250mm', date: '11:57AM | 14 March 2026' },

  { id: 'w2', image: '/photography/brazil/BRAZIL-bridge-water.jpg', caption: "The Rio Negro Bridge links Manaus to Iranduba across one of the world\'s great blackwater rivers, and is often described as a \"bridge to nowhere.\" In a region where movement has been river-based for centuries, a fixed road crossing sits somewhat at odds with the existing logic of transport. Studies following its 2011 opening documented measurable increases in deforestation as road access expanded inland. Infrastructure of this scale tends to change the places it connects, not just connect them.", device: 'Nikon Z5, 50-250mm', date: '2:49PM | 16 March 2026' },
];

// ── Section 2: The Rio Negro ─────────────────────────────────────────────────
export const negroPhotos: AmazoniaPhoto[] = [
  { id: 'n1', image: '/photography/brazil/BRAZIL-NEGRO-bridgepillars.jpg', caption: "Support pillars of the Rio Negro Bridge extend into the river, designed to withstand continuous flow and seasonal variation in water level. Their vertical form allows water to pass around them with limited obstruction, reducing pressure from current and debris in a channel where depth and volume fluctuate throughout the year.", device: 'Nikon Z5, 50-250mm', date: '2:54PM | 16 March 2026' },

  { id: 'n2', image: '/photography/brazil/BRAZIL-NEGRO-boathull.jpg', caption: "Numbers marked along the hull indicate depth and loading, showing how the vessel sits in the water under different conditions. In the Rio Negro, clearer water and lower sediment allow these measurements to be read more easily, providing a direct reference between water level and vessel displacement. On this boat, heavy use and rust is seen on the bottom numbers, suggesting how deep the vessel always sits, versus where it sometimes reaches.", device: 'Nikon Z5, 50-250mm', date: '2:55PM | 16 March 2026' },

  { id: 'n3', image: '/photography/brazil/BRAZIL-NEGRO-houseonwater.jpg', caption: "A structure sits directly atop the river, positioned to maintain access across changing water levels. Construction accounts for seasonal rise and fall, allowing continued use as the shoreline shifts.", device: 'Nikon Z5, 50-250mm', date: '9:04AM | 17 March 2026' },

  { id: 'n4', image: '/photography/brazil/BRAZIL-NEGRO-satellitestilts.jpg', caption: "Buildings and other structures such as satellites are elevated on stilts, lifting living space and essentials above expected flood levels and rainy, muddy ground. During high-water periods, the river occupies the space below, while in lower conditions, the ground becomes accessible again. This vertical separation accommodates regular inundation without requiring relocation.", device: 'Nikon Z5, 50-250mm', date: '3:37PM | 17 March 2026' },

  { id: 'n5', image: '/photography/brazil/BRAZIL-NEGRO-treeroots.jpg', caption: "Tree roots extend above the soil surface, adapted to saturated and periodically flooded conditions. In areas where water levels fluctuate, root systems stabilize the tree while allowing gas exchange in low-oxygen soils. Their exposure reflects both erosion and long-term adjustment to a shifting river edge.", device: 'Nikon Z5, 50-250mm', date: '3:39PM | 17 March 2026' },

  { id: 'n6', image: '/photography/brazil/BRAZIL-NEGRO-leafrain.jpg', caption: "Rainfall collects and moves across leaf surfaces before returning to the ground and water below. Precipitation in the Amazon basin feeds back into the river system almost immediately. The forest recycles a significant share of its own moisture through evaporation, which in turn generates the rainfall that sustains the river.", device: 'Nikon Z5, 50-250mm', date: '4:19PM | 18 March 2026' },

  { id: 'n7', image: '/photography/brazil/BRAZIL-NEGRO-raindrops.jpg', caption: "Raindrops disturb the surface of the river, briefly interrupting reflection and creating expanding circular patterns. These small-scale interactions mark the continuous input of water from above, contributing to the broader hydrological cycle that sustains river flow.", device: 'Nikon Z5, 50-250mm', date: '8:58AM | 19 March 2026' },


];

