import React, { createContext, useContext, useState, ReactNode } from 'react';
import {
  Destination,
  Tour,
  Hotel,
  Booking,
  UserProfile,
  NotificationItem,
  FilterState,
} from '../types';
import {
  MOCK_DESTINATIONS,
  MOCK_TOURS,
  MOCK_HOTEL,
  MOCK_BOOKING,
  MOCK_USER,
  MOCK_NOTIFICATIONS,
} from '../constants/mockData';

interface AppContextType {
  // Destinations & Favorites
  destinations: Destination[];
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;

  // Tours
  tours: Tour[];
  toggleTourFavorite: (id: string) => void;

  // Hotels & Bookings
  hotel: Hotel;
  currentBooking: Booking;
  createBooking: (destinationTitle: string, dates: string, travelers: string, price: string) => void;

  // User
  user: UserProfile;

  // Notifications
  notifications: NotificationItem[];
  markNotificationAsRead: (id: string) => void;
  unreadCount: number;

  // Filters
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;

  // Offline Guides
  offlineDownloaded: boolean;
  setOfflineDownloaded: (downloaded: boolean) => void;
  offlineProgress: number;
  downloadOfflineGuides: () => Promise<void>;

  // Settings
  notificationsEnabled: boolean;
  setNotificationsEnabled: (enabled: boolean) => void;
  language: string;
  setLanguage: (lang: string) => void;
}

const defaultFilters: FilterState = {
  categories: {
    Nature: true,
    Culture: false,
    Adventure: false,
    Heritage: false,
  },
  priceRange: [0, 500],
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [destinations] = useState<Destination[]>(MOCK_DESTINATIONS);
  const [favorites, setFavorites] = useState<string[]>(['lalibela', 'simien-mountains', 'gondar', 'axum']);
  const [tours, setTours] = useState<Tour[]>(MOCK_TOURS);
  const [hotel] = useState<Hotel>(MOCK_HOTEL);
  const [currentBooking, setCurrentBooking] = useState<Booking>(MOCK_BOOKING);
  const [user] = useState<UserProfile>(MOCK_USER);
  const [notifications, setNotifications] = useState<NotificationItem[]>(MOCK_NOTIFICATIONS);
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [offlineDownloaded, setOfflineDownloaded] = useState<boolean>(false);
  const [offlineProgress, setOfflineProgress] = useState<number>(0);
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);
  const [language, setLanguage] = useState<string>('English');

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const toggleTourFavorite = (id: string) => {
    setTours((prev) =>
      prev.map((tour) =>
        tour.id === id ? { ...tour, isFavorite: !tour.isFavorite } : tour
      )
    );
  };

  const createBooking = (
    destinationTitle: string,
    dates: string,
    travelers: string,
    price: string
  ) => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    setCurrentBooking({
      bookingId: `#HV2026${randomSuffix}`,
      destinationTitle,
      dates,
      travelers,
      status: 'Confirmed',
      totalPrice: price,
    });
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  const downloadOfflineGuides = async () => {
    setOfflineProgress(10);
    await new Promise((r) => setTimeout(r, 300));
    setOfflineProgress(45);
    await new Promise((r) => setTimeout(r, 400));
    setOfflineProgress(85);
    await new Promise((r) => setTimeout(r, 300));
    setOfflineProgress(100);
    setOfflineDownloaded(true);
  };

  return (
    <AppContext.Provider
      value={{
        destinations,
        favorites,
        toggleFavorite,
        isFavorite,
        tours,
        toggleTourFavorite,
        hotel,
        currentBooking,
        createBooking,
        user,
        notifications,
        markNotificationAsRead,
        unreadCount: notifications.length,
        filters,
        setFilters,
        resetFilters,
        offlineDownloaded,
        setOfflineDownloaded,
        offlineProgress,
        downloadOfflineGuides,
        notificationsEnabled,
        setNotificationsEnabled,
        language,
        setLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
