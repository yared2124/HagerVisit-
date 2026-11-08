import {
  MOCK_DESTINATIONS,
  MOCK_TOURS,
  MOCK_HOTEL,
  MOCK_BOOKING,
  MOCK_USER,
  MOCK_NOTIFICATIONS,
} from '../../constants/mockData';
import { Destination, Tour, Hotel, Booking, UserProfile, NotificationItem } from '../../types';

export const apiService = {
  getDestinations: async (): Promise<Destination[]> => {
    return Promise.resolve(MOCK_DESTINATIONS);
  },

  getDestinationById: async (id: string): Promise<Destination | undefined> => {
    return Promise.resolve(MOCK_DESTINATIONS.find((d) => d.id === id));
  },

  getTours: async (category?: string): Promise<Tour[]> => {
    if (!category || category === 'All') return Promise.resolve(MOCK_TOURS);
    return Promise.resolve(MOCK_TOURS.filter((t) => t.category === category));
  },

  getHotelDetails: async (id: string): Promise<Hotel> => {
    return Promise.resolve(MOCK_HOTEL);
  },

  getUserProfile: async (): Promise<UserProfile> => {
    return Promise.resolve(MOCK_USER);
  },

  getNotifications: async (): Promise<NotificationItem[]> => {
    return Promise.resolve(MOCK_NOTIFICATIONS);
  },
};

