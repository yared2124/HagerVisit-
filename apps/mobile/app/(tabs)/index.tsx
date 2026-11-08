import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { HagerLogo } from '../../src/components/ui/HagerLogo';
import { SearchBar } from '../../src/components/ui/SearchBar';
import { FeaturedHeroCard } from '../../src/components/cards/FeaturedHeroCard';
import { DestinationCarouselCard } from '../../src/components/cards/DestinationCarouselCard';
import { useApp } from '../../src/store/AppContext';
import { colors, spacing, typography } from '../../src/theme';

export default function HomeScreen() {
  const router = useRouter();
  const { destinations, unreadCount } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  const featuredDestination = destinations.find((d) => d.featured) || destinations[0];
  const popularDestinations = destinations.filter((d) => !d.featured);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        {/* Top Header Bar */}
        <View style={styles.header}>
          <HagerLogo size={24} />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push('/notifications' as any)}
            style={styles.bellButton}
          >
            <Ionicons name="notifications-outline" size={22} color={colors.textPrimary} />
            {unreadCount > 0 && <View style={styles.notificationDot} />}
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Search Bar */}
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search destinations..."
            onFilterPress={() => router.push('/destinations/filters' as any)}
          />

          {/* Featured Hero Card (Lalibela) */}
          <FeaturedHeroCard
            destination={featuredDestination}
            onPress={() => router.push(`/destinations/${featuredDestination.id}` as any)}
          />

          {/* Popular Destinations Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Destinations</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push('/(tabs)/explore' as any)}
            >
              <Text style={styles.seeAllText}>See all →</Text>
            </TouchableOpacity>
          </View>

          {/* Horizontal Destinations Carousel */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContainer}
          >
            {popularDestinations.map((destination) => (
              <DestinationCarouselCard
                key={destination.id}
                destination={destination}
                onPress={() => router.push(`/destinations/${destination.id}` as any)}
              />
            ))}
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: '#FFFFFF',
  },
  bellButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#F3F5F3',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: colors.favorite,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  sectionTitle: {
    fontSize: typography.cardTitle.fontSize,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  seeAllText: {
    fontSize: typography.sm,
    color: colors.textSecondary,
    fontWeight: typography.medium,
  },
  carouselContainer: {
    paddingVertical: spacing.xs,
  },
});
