/*

This is the photo data for the Photography section of the website.

*/

export type Photo = {
  id: string;
  image: string;
  date: string;
  location: string;
  description: string;
};

export const photos: Photo[] = [
  { id: '4', image: '/icealnd-cottage.jpg', date: 'TBD', location: 'TBD', description: 'TBD' },
  { id: '10', image: '/iceland-river.jpg', date: 'TBD', location: 'TBD', description: 'TBD' },
  { id: '3', image: '/greek-monasteries.jpg', date: 'TBD', location: 'TBD', description: 'TBD' },

  { id: '5', image: '/iceland-birds.jpg', date: 'TBD', location: 'TBD', description: 'TBD' },
  { id: '6', image: '/iceland-blacksandbeach.jpg', date: 'TBD', location: 'TBD', description: 'TBD' },
  { id: '7', image: '/iceland-blacksandbeach2.jpg', date: 'TBD', location: 'TBD', description: 'TBD' },
  { id: '8', image: '/iceland-cover.jpg', date: 'TBD', location: 'TBD', description: 'TBD' },

  { id: '9', image: '/iceland-highlands.jpg', date: 'TBD', location: 'TBD', description: 'TBD' },
  { id: '11', image: '/iceland-river2.jpg', date: 'TBD', location: 'TBD', description: 'TBD' },
  { id: '1', image: '/broad x exchange.jpg', date: 'TBD', location: 'TBD', description: 'TBD' },
  
  { id: '2', image: '/brooklyn-museum.JPG', date: 'TBD', location: 'TBD', description: 'TBD' },
  { id: '12', image: '/manhattan bridge.jpg', date: 'TBD', location: 'TBD', description: 'TBD' },
  { id: '13', image: '/sun rays.jpg', date: 'TBD', location: 'TBD', description: 'TBD' }
];
