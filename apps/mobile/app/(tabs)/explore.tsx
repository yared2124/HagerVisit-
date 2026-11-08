import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from '../../src/components/ui/SearchBar';
import { MOCK_DESTINATIONS } from '../../src/constants/mockData';
import { colors, radii, spacing, typography, shadows } from '../../src/theme';

export default function ExploreMapScreen() {
  const router = useRouter();
  const [selectedDestination, setSelectedDestination] = useState(MOCK_DESTINATIONS[0]);
  const [searchQuery, setSearchQuery] = useState('');

  // Map pins coordinates in % of screen area
  const pins = [
    { id: 'lalibela', x: '52%', y: '28%', title: 'Lalibela', active: true },
    { id: 'gondar', x: '35%', y: '32%', title: 'Gondar' },
    { id: 'axum', x: '46%', y: '16%', title: 'Axum' },
    { id: 'simien', x: '42%', y: '24%', title: 'Simien' },
    { id: 'danakil', x: '68%', y: '22%', title: 'Danakil' },
    { id: 'harar', x: '72%', y: '48%', title: 'Harar' },
    { id: 'addis', x: '50%', y: '46%', title: 'Addis Ababa' },
    { id: 'omo', x: '34%', y: '68%', title: 'Omo Valley' },
    { id: 'bale', x: '60%', y: '58%', title: 'Bale' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        {/* Top Search Bar */}
        <View style={styles.header}>
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search here..."
            onFilterPress={() => router.push('/destinations/filters' as any)}
          />
        </View>

        {/* Map Canvas */}
        <View style={styles.mapArea}>
          {/* Topographic Background Simulation */}
          <View style={styles.mapCanvas}>
            <View style={styles.lakeTana} />
            <View style={styles.riverAbay} />

            {/* Pins */}
            {pins.map((pin) => {
              const isSelected = selectedDestination.id === pin.id || pin.active;
              return (
                <View
                  key={pin.id}
                  style={[
                    styles.pinContainer,
                    { left: pin.x as any, top: pin.y as any },
                  ]}
                >
                  {/* Active Pin Callout Popup */}
                  {isSelected && (
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={() => router.push(`/destinations/${selectedDestination.id}` as any)}
                      style={[styles.calloutPopup, shadows.card]}
                    >
                      <Image
                        source={{ uri: selectedDestination.image }}
                        style={styles.calloutThumb}
                      />
                      <View style={styles.calloutText}>
                        <Text style={styles.calloutTitle}>{selectedDestination.title}</Text>
                        <View style={styles.calloutRating}>
                          <Ionicons name="star" size={11} color={colors.star} />
                          <Text style={styles.calloutRatingNum}>
                            {selectedDestination.rating}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}

                  {/* Pin Dot / Icon */}
                  <View
                    style={[
                      styles.mapPinDot,
                      isSelected && styles.mapPinDotActive,
                    ]}
                  >
                    <Ionicons
                      name="location"
                      size={isSelected ? 18 : 14}
                      color={isSelected ? colors.primary : '#285848'}
                    />
                  </View>
                </View>
              );
            })}
          </View>

          {/* Floating Recenter GPS Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.gpsButton, shadows.floating]}
          >
            <Ionicons name="locate" size={20} color={colors.primary} />
          </TouchableOpacity>

          {/* Bottom Floating Destination Card */}
          <View style={styles.bottomCardContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => router.push(`/destinations/${selectedDestination.id}` as any)}
              style={[styles.floatingCard, shadows.floating]}
            >
              <Image
                source={{ uri: selectedDestination.image }}
                style={styles.cardThumb}
              />
              <View style={styles.cardDetails}>
                <Text style={styles.cardTitle}>{selectedDestination.title}</Text>
                <Text style={styles.cardSubtitle}>{selectedDestination.subtitle}</Text>
                <View style={styles.cardRatingRow}>
                  <Ionicons name="star" size={13} color={colors.star} />
                  <Text style={styles.cardRating}>
                    {selectedDestination.rating} ({selectedDestination.reviewsCount})
                  </Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
            </TouchableOpacity>
          </View>
        </View>
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
    backgroundColor: '#EAF1EC',
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xs,
    paddingBottom: spacing.xs,
    backgroundColor: '#FFFFFF',
    zIndex: 10,
  },
  mapArea: {
    flex: 1,
    position: 'relative',
  },
  mapCanvas: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#E8EFEA',
  },
  lakeTana: {
    position: 'absolute',
    top: '26%',
    left: '32%',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#D6E5DF',
  },
  riverAbay: {
    position: 'absolute',
    top: '32%',
    left: '34%',
    width: 4,
    height: 90,
    backgroundColor: '#D6E5DF',
    borderRadius: 2,
    transform: [{ rotate: '30deg' }],
  },
  pinContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  mapPinDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#245A48',
    ...shadows.subtle,
  },
  mapPinDotActive: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderColor: colors.primary,
    borderWidth: 2,
  },
  calloutPopup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: radii.sm,
    padding: 4,
    gap: 6,
    marginBottom: 6,
    minWidth: 95,
  },
  calloutThumb: {
    width: 28,
    height: 28,
    borderRadius: 4,
  },
  calloutText: {
    flex: 1,
  },
  calloutTitle: {
    fontSize: 11,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  calloutRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  calloutRatingNum: {
    fontSize: 10,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  gpsButton: {
    position: 'absolute',
    bottom: 110,
    right: spacing.lg,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomCardContainer: {
    position: 'absolute',
    bottom: spacing.lg,
    left: spacing.lg,
    right: spacing.lg,
  },
  floatingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: radii.card,
    padding: spacing.md,
    gap: spacing.md,
  },
  cardThumb: {
    width: 54,
    height: 54,
    borderRadius: radii.sm,
  },
  cardDetails: {
    flex: 1,
    gap: 2,
  },
  cardTitle: {
    fontSize: typography.md,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  cardSubtitle: {
    fontSize: typography.xs,
    color: colors.textSecondary,
  },
  cardRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginTop: 2,
  },
  cardRating: {
    fontSize: typography.xs,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
});

