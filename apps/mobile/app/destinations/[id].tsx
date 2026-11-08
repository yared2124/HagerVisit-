import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_DESTINATIONS } from '../../src/constants/mockData';
import { TagBadge } from '../../src/components/ui/TagBadge';
import { RatingBadge } from '../../src/components/ui/RatingBadge';
import { colors, radii, spacing, typography, shadows } from '../../src/theme';

const { width } = Dimensions.get('window');

export default function DestinationDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  const destination =
    MOCK_DESTINATIONS.find((d) => d.id === id) || MOCK_DESTINATIONS[0];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* Hero Image Section */}
      <View style={styles.heroWrapper}>
        <Image source={{ uri: destination.image }} style={styles.heroImage} />

        {/* Top Floating Controls */}
        <SafeAreaView style={styles.topBar}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.back()}
            style={styles.circleButton}
          >
            <Ionicons name="chevron-back" size={20} color={colors.textPrimary} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setIsFavorite(!isFavorite)}
            style={styles.circleButton}
          >
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={20}
              color={colors.favorite}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </View>

      {/* Bottom Sheet Card */}
      <View style={styles.sheetContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.sheetContent}
        >
          {/* Title and Subtitle */}
          <View style={styles.titleGroup}>
            <Text style={styles.title}>{destination.title}</Text>
            <Text style={styles.subtitle}>{destination.subtitle}</Text>
          </View>

          {/* Rating */}
          <RatingBadge
            rating={destination.rating}
            reviewsCount={destination.reviewsCount}
            size="md"
          />

          {/* Description */}
          <Text style={styles.description}>{destination.description}</Text>

          {/* Tags */}
          <View style={styles.tagsRow}>
            {destination.tags.map((tag) => (
              <TagBadge key={tag} label={tag} />
            ))}
          </View>

          {/* Action Row: Add to Trip + Bookmark */}
          <View style={styles.actionRow}>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => router.push('/bookings/confirmed' as any)}
              style={styles.addToTripBtn}
            >
              <Text style={styles.addToTripText}>Add to Trip</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setIsSaved(!isSaved)}
              style={styles.bookmarkBtn}
            >
              <Ionicons
                name={isSaved ? 'bookmark' : 'bookmark-outline'}
                size={22}
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>

          {/* Map Preview Card */}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => router.push('/(tabs)/explore' as any)}
            style={[styles.mapCard, shadows.subtle]}
          >
            <View style={styles.mapGraphic}>
              <View style={styles.mapGrid} />
              <View style={styles.mapPin}>
                <Ionicons name="location" size={22} color={colors.favorite} />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  heroWrapper: {
    width: '100%',
    height: '42%',
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  topBar: {
    position: 'absolute',
    top: 10,
    left: spacing.lg,
    right: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circleButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.subtle,
  },
  sheetContainer: {
    flex: 1,
    marginTop: -28,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    overflow: 'hidden',
  },
  sheetContent: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
    gap: spacing.md,
  },
  titleGroup: {
    gap: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: typography.md,
    color: colors.textSecondary,
    fontWeight: '400',
  },
  description: {
    fontSize: typography.body.fontSize,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginVertical: spacing.xs,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginTop: spacing.xs,
  },
  addToTripBtn: {
    flex: 1,
    height: 50,
    borderRadius: radii.button,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToTripText: {
    fontSize: typography.md,
    fontWeight: typography.bold,
    color: colors.textInverse,
  },
  bookmarkBtn: {
    width: 50,
    height: 50,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#E2EAE5',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  mapCard: {
    height: 90,
    borderRadius: radii.card,
    backgroundColor: '#EBF2EE',
    overflow: 'hidden',
    marginTop: spacing.xs,
  },
  mapGraphic: {
    flex: 1,
    backgroundColor: '#E8F0EA',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  mapGrid: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.1,
    backgroundColor: '#144234',
  },
  mapPin: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.subtle,
  },
});

