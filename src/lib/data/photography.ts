/*

This is the photo data for the Photography section of the website.

*/

export type Photo = {
  id: string;
  image: string;
  imageThumb?: string;
  date: string;
  location: string;
  description: string;
};

export const photos: Photo[] = [
  { id: '4', image: '/iceland-cottage.jpg', imageThumb: '/thumbnails/iceland-cottage-thumb.jpg', date: 'December 17, 2024', location: 'Outside Reykjavik, Iceland', description: 'During our hunt for the northern lights, a stop at little cottages on a road near Reykjavík.' },
  { id: '10', image: '/iceland-river.jpg', imageThumb: '/thumbnails/iceland-river-thumb.jpg', date: 'December 18, 2024', location: 'Borgarfjörður bay, Iceland', description: 'A winter wonderland overlooking the Hraunfossar waterfalls in western Iceland, one of the few mostly clear days I was there.' },
  { id: '3', image: '/greek-monasteries.jpg', imageThumb: '/thumbnails/greek-monasteries-thumb.jpg', date: 'April 19, 2023', location: 'Meteora, Greece', description: 'A peek at one of the Greek Orthadox monasteries, located in Central Northern Greece.' },

  { id: '5', image: '/iceland-birds.jpg', imageThumb: '/thumbnails/iceland-birds-thumb.jpg', date: 'December 15, 2024', location: 'Reykjavík, Iceland', description: 'A collection of geese, on the southern tip of Reykjavík.' },
  { id: '6', image: '/iceland-blacksandbeach.jpg', imageThumb: '/thumbnails/iceland-blacksandbeach-thumb.jpg', date: 'December 17, 2024', location: 'Reynisfjara Beach, Iceland', description: 'One of the rock formations on Reynisfjara Beach on the southern coast of Iceland, circled by birds.' },
  { id: '18', image: '/canal-street.jpg', imageThumb: '/thumbnails/canal-street-thumb.jpg', date: 'June 16, 2025', location: 'Manhattan, NY', description: 'On my walk back from work, the busyness of Canal and Broadway doesn\'t stop.' },
  { id: '7', image: '/iceland-blacksandbeach2.jpg', imageThumb: '/thumbnails/iceland-blacksandbeach2-thumb.jpg', date: 'December 17, 2024', location: 'Reynisfjara Beach, Iceland', description: 'The famed Reynisfjara black sand beach near the town of Vík, on a day of higher tide.' },
  
  { id: '8', image: '/iceland-cover.jpg', imageThumb: '/thumbnails/iceland-cover-thumb.jpg', date: 'December 18, 2024', location: 'Outside Reykjavík, Iceland', description: 'Right next to a lake with a view of the Reykjavík skyline, I turned around to see this lonely little house.' },
  { id: '9', image: '/iceland-highlands.jpg', imageThumb: '/thumbnails/iceland-highlands-thumb.jpg', date: 'December 18, 2024', location: 'Near Langjökull glacier, Iceland', description: 'On the way to an ice cave tour of the Langjökull glacier, in the Icelandic Highlands.' },
  { id: '11', image: '/iceland-river2.jpg', imageThumb: '/thumbnails/iceland-river2-thumb.jpg', date: 'December 16, 2024', location: 'Þingvellir National Park, Iceland', description: 'A river flowing through the continental ridge between the North American and Eurasian tectonic plates.' },
  
  { id: '14', image: '/aandsuc.jpg', imageThumb: '/thumbnails/aandsuc-thumb.jpg', date: 'November 4, 2025', location: 'Cincinnati, OH', description: 'UC\'s Arts and Sciences Building, on my way to class.' },
  { id: '1', image: '/broad x exchange.jpg', imageThumb: '/thumbnails/broad x exchange-thumb.jpg', date: 'November 9, 2023', location: 'Manhattan, NY', description: 'One of my many street sign photos, this taken on a FiDi crawl.' },
  { id: '2', image: '/brooklyn-museum.JPG', imageThumb: '/thumbnails/brooklyn-museum-thumb.jpg', date: 'May 29, 2025', location: 'Brooklyn, NY', description: 'A statue standing at the entrance of the Brooklyn museum in NYC.' },
  
  { id: '12', image: '/manhattan bridge.jpg', imageThumb: '/thumbnails/manhattan bridge-thumb.jpg', date: 'June 7, 2025', location: 'Manhattan, NY', description: 'Taken during a torrential rain storm in New York City, walking across the Manhattan bridge back from a day in Brooklyn (having not checked the weather). I happened to find a torn hole in the fencing, with just enough room to take a photo.' },
  { id: '13', image: '/sun rays.jpg', imageThumb: '/thumbnails/sun rays-thumb.jpg', date: 'August 5, 2024', location: 'Muir Woods National Monument, CA', description: 'Sun rays peeking through during a hike through Muir Woods in California.' },
  { id: '15', image: '/aurora-faith.jpg', imageThumb: '/thumbnails/aurora-faith-thumb.jpg', date: 'December 19, 2024', location: 'Reykjavík, Iceland', description: 'Watching the aurora borealis in southern Reykjavík, having precariously set both myself and my tripod on boulders.' },
  { id: '16', image: '/santorini-sunset.jpg', imageThumb: '/thumbnails/santorini-sunset-thumb.jpg', date: 'April 21, 2023', location: 'Oia, Santorini, Greece', description: 'The famous sunset on the northern tip on the Greek island of Santorini.' },
 
  { id: '17', image: '/cincinnati-hardrock.jpg', imageThumb: '/thumbnails/cincinnati-hardrock-thumb.jpg', date: 'February 17, 2025', location: 'Cincinnati, OH', description: 'A view of downtown Cincinnati, Coming off I-71.' },
  { id: '18', image: '/nyc-pigeon.jpg', imageThumb: '/thumbnails/nyc-pigeon-thumb.jpg', date: 'June 25, 2025', location: 'Manhattan, NY', description: 'In City Hall Park, I saw this pigeon nearly every day. Their little ankle tag helped me identify them, but they were the only lighter brown one that stuck around there.' },

];
