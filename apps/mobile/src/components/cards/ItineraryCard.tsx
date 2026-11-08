import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radii, spacing, typography, shadows } from '../../theme';
import { Itinerary } from '../../types';

interface ItineraryCardProps {
  itinerary: Itinerary;
  onPress: () => void;
}

export const ItineraryCard: React.FC<ItineraryCardProps> = ({
  itinerary,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.88}
      onPress={onPress}
      style={[styles.container, shadows.subtle]}
    >
      <Image source={{ uri: itinerary.image }} style={styles.thumbnail} />
      <View style={styles.details}>
        <Text style={styles.title}>{itinerary.title}</Text>
        <Text style={styles.meta}>
          {itinerary.duration} · {itinerary.placesCount}
        </Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={13} color={colors.star} />
          <Text style={styles.ratingText}>{itinerary.rating.toFixed(1)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    padding: spacing.sm,
    alignItems: 'center',
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: radii.sm,
  },
  details: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: typography.md,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  meta: {
    fontSize: typography.sm,
    color: colors.textSecondary,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  ratingText: {
    fontSize: typography.xs,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
});

