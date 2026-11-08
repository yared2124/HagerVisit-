export interface Destination {
  id: string;
  title: string;
  subtitle: string;
  rating: number;
  reviewsCount?: string;
  description: string;
  tags: string[];
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  category: 'Nature' | 'Culture' | 'Adventure' | 'Heritage';
  price?: string;
  featured?: boolean;
}

export interface Tour {
  id: string;
  title: string;
  price: string;
  pricePerPerson: number;
  rating: number;
  category: 'All' | 'Day Tours' | 'Multi-Day';
  image: string;
  isFavorite?: boolean;
}

export interface Hotel {
  id: string;
  title: string;
  rating: number;
  reviewsCount: string;
  price: string;
  pricePerNight: number;
  amenities: ('WiFi' | 'Pool' | 'Parking' | 'Spa' | 'Restaurant')[];
  description: string;
  image: string;
}

export interface Booking {
  bookingId: string;
  destinationTitle: string;
  dates: string;
  travelers: string;
  status: 'Confirmed' | 'Pending' | 'Completed';
  totalPrice: string;
}

export interface Itinerary {
  id: string;
  title: string;
  duration: string;
  placesCount: string;
  rating: number;
  image: string;
}

export interface UserProfile {
  name: string;
  role: string;
  email: string;
  avatar: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  timeAgo: string;
  type: 'booking' | 'tour' | 'offer' | 'welcome' | 'review';
  iconColor: string;
  iconName: string;
}

export interface FilterState {
  categories: {
    Nature: boolean;
    Culture: boolean;
    Adventure: boolean;
    Heritage: boolean;
  };
  priceRange: [number, number];
}

