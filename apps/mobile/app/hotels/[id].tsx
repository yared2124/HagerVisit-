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
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Button } from '../../src/components/ui/Button';
import { RatingBadge } from '../../src/components/ui/RatingBadge';
import { MOCK_HOTEL } from '../../src/constants/mockData';
import { colors, radii, spacing, typography, shadows } from '../../src/theme';

export default function HotelDetailScreen() {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const hotel = MOCK_HOTEL;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* Top Image Carousel */}
      <View style={styles.heroWrapper}>
        <Image source={{ uri: hotel.image }} style={styles.heroImage} />

        {/* Top Controls */}
        <SafeAreaView style={styles.topBar}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.back()}
            style={styles.circleBtn}
          >
            <Ionicons name="chevron-back" size={20} color={colors.textPrimary} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setIsFavorite(!isFavorite)}
            style={styles.circleBtn}
          >
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={20}
              color={colors.favorite}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </View>

      {/* Content Sheet */}
      <View style={styles.sheetContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.sheetContent}
        >
          {/* Title & Rating */}
          <Text style={styles.title}>{hotel.title}</Text>
          <RatingBadge rating={hotel.rating} reviewsCount={hotel.reviewsCount} />

          {/* Pricing */}
          <View style={styles.priceRow}>
            <Text style={styles.priceAmount}>{hotel.price}</Text>
            <Text style={styles.priceUnit}> / night</Text>
          </View>

          {/* Amenities Row */}
          <View style={styles.amenitiesRow}>
            <View style={styles.amenityChip}>
              <Feather name="wifi" size={16} color={colors.textPrimary} />
              <Text style={styles.amenityText}>WiFi</Text>
            </View>

            <View style={styles.amenityChip}>
              <Ionicons name="water-outline" size={16} color={colors.textPrimary} />
              <Text style={styles.amenityText}>Pool</Text>
            </View>

            <View style={styles.amenityChip}>
              <Ionicons name="car-outline" size={16} color={colors.textPrimary} />
              <Text style={styles.amenityText}>Parking</Text>
            </View>
          </View>

          {/* Book Now Button */}
          <Button
            title="Book Now"
            onPress={() => router.push('/bookings/confirmed' as any)}
            variant="primary"
            size="lg"
            style={styles.bookBtn}
          />

          {/* About this hotel */}
          <View style={styles.aboutSection}>
            <Text style={styles.aboutHeading}>About this hotel</Text>
            <Text style={styles.aboutDescription}>{hotel.description}</Text>
          </View>
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
  circleBtn: {
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
  title: {
    fontSize: 22,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: spacing.xs,
  },
  priceAmount: {
    fontSize: 26,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  priceUnit: {
    fontSize: typography.md,
    color: colors.textSecondary,
  },
  amenitiesRow: {
    flexDirection: 'row',
    gap: spacing.md,
    marginVertical: spacing.xs,
  },
  amenityChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    backgroundColor: '#F3F6F4',
    paddingHorizontal: spacing.md,
    paddingVertical: 8,
    borderRadius: radii.sm,
  },
  amenityText: {
    fontSize: typography.sm,
    color: colors.textPrimary,
    fontWeight: typography.medium,
  },
  bookBtn: {
    marginTop: spacing.xs,
    marginBottom: spacing.sm,
  },
  aboutSection: {
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  aboutHeading: {
    fontSize: typography.md,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  aboutDescription: {
    fontSize: typography.body.fontSize,
    color: colors.textSecondary,
    lineHeight: 22,
  },
});

