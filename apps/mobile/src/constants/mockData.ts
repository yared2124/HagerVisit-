import {
  Destination,
  Tour,
  Hotel,
  Booking,
  Itinerary,
  UserProfile,
  NotificationItem,
} from '../types';

export const MOCK_DESTINATIONS: Destination[] = [
  {
    id: 'lalibela',
    title: 'Lalibela',
    subtitle: 'Rock-Hewn Churches',
    rating: 4.8,
    reviewsCount: '2.5k reviews',
    description: 'A UNESCO World Heritage site with incredible rock-hewn churches carved from living stone.',
    tags: ['History', 'Culture', 'UNESCO'],
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1599818815124-76228302f3a6?q=80&w=800&auto=format&fit=crop',
    coordinates: { lat: 12.0322, lng: 39.0476 },
    price: '$45',
    featured: true,
  },
  {
    id: 'axum',
    title: 'Axum',
    subtitle: 'Ancient Kingdom & Stelae',
    rating: 4.7,
    reviewsCount: '1.8k reviews',
    description: 'The ancient capital of the Aksumite Empire, home to towering monolithic obelisks and historical treasures.',
    tags: ['History', 'Heritage'],
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
    coordinates: { lat: 14.1278, lng: 38.7188 },
  },
  {
    id: 'simien-mountains',
    title: 'Simien Mountains',
    subtitle: 'Roof of Africa Escarpment',
    rating: 4.9,
    reviewsCount: '3.1k reviews',
    description: 'Breathtaking peaks, dramatic deep valleys, and rare wildlife like the Walia Ibex and Gelada baboons.',
    tags: ['Nature', 'Adventure'],
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop',
    coordinates: { lat: 13.2389, lng: 38.3686 },
  },
  {
    id: 'danakil-depression',
    title: 'Danakil Depression',
    subtitle: 'Alien Landscapes & Volcanoes',
    rating: 4.9,
    reviewsCount: '2.0k reviews',
    description: 'One of the hottest and lowest geological marvels on Earth, famous for neon sulfur springs and bubbling lava lakes.',
    tags: ['Adventure', 'Nature'],
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop',
    coordinates: { lat: 14.2417, lng: 40.3000 },
  },
  {
    id: 'gondar',
    title: 'Gondar',
    subtitle: 'Royal Enclosure Castles',
    rating: 4.8,
    reviewsCount: '1.9k reviews',
    description: 'The Camelot of Africa, renowned for its 17th-century Fasil Ghebbi stone fortress palaces and royal baths.',
    tags: ['Heritage', 'Culture', 'UNESCO'],
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f8418b7d?q=80&w=800&auto=format&fit=crop',
    coordinates: { lat: 12.6075, lng: 37.4667 },
  },
];

export const MOCK_TOURS: Tour[] = [
  {
    id: 'simien-trek',
    title: 'Simien Mountains Trek',
    price: '$180 / person',
    pricePerPerson: 180,
    rating: 4.9,
    category: 'Multi-Day',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop',
    isFavorite: true,
  },
  {
    id: 'danakil-overnight',
    title: 'Danakil Overnight Tour',
    price: '$250 / person',
    pricePerPerson: 250,
    rating: 4.9,
    category: 'Multi-Day',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop',
    isFavorite: true,
  },
  {
    id: 'lalibela-spiritual-day',
    title: 'Lalibela Spiritual Day Tour',
    price: '$95 / person',
    pricePerPerson: 95,
    rating: 4.8,
    category: 'Day Tours',
    image: 'https://images.unsplash.com/photo-1599818815124-76228302f3a6?q=80&w=800&auto=format&fit=crop',
    isFavorite: false,
  },
];

export const MOCK_HOTEL: Hotel = {
  id: 'blue-nile-hotel',
  title: 'The Blue Nile Hotel',
  rating: 4.7,
  reviewsCount: '1.2k reviews',
  price: '$75',
  pricePerNight: 75,
  amenities: ['WiFi', 'Pool', 'Parking'],
  description: 'Experience luxury and comfort with prime access to historic sites, gourmet dining, and panoramic views.',
  image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
};

export const MOCK_BOOKING: Booking = {
  bookingId: '#HV20261107',
  destinationTitle: 'Lalibela Rock-Hewn Churches',
  dates: 'Nov 12 - Nov 16, 2026',
  travelers: '1 Traveler',
  status: 'Confirmed',
  totalPrice: '$340',
};

export const MOCK_ITINERARY: Itinerary = {
  id: 'ethiopia-heritage-tour',
  title: 'Ethiopia Heritage Tour',
  duration: '5 Days',
  placesCount: '2 Places',
  rating: 4.9,
  image: 'https://images.unsplash.com/photo-1599818815124-76228302f3a6?q=80&w=800&auto=format&fit=crop',
};

export const MOCK_USER: UserProfile = {
  name: 'Yared Aregayehu',
  role: 'Traveler',
  email: 'yared@hagervisit.et',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
};

export const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: '1',
    title: 'Your booking is confirmed',
    timeAgo: '2h ago',
    type: 'booking',
    iconColor: '#3B82F6', // Blue
    iconName: 'calendar',
  },
  {
    id: '2',
    title: 'New tour available',
    timeAgo: '1d ago',
    type: 'tour',
    iconColor: '#F59E0B', // Amber / Orange
    iconName: 'compass',
  },
  {
    id: '3',
    title: 'Special offer: 20% off',
    timeAgo: '1d ago',
    type: 'offer',
    iconColor: '#F97316', // Orange
    iconName: 'tag',
  },
  {
    id: '4',
    title: 'Welcome to HagerVisit!',
    timeAgo: '1d ago',
    type: 'welcome',
    iconColor: '#EF4444', // Red
    iconName: 'heart',
  },
  {
    id: '5',
    title: 'Rate your experience',
    timeAgo: '2d ago',
    type: 'review',
    iconColor: '#EAB308', // Yellow
    iconName: 'star',
  },
];

