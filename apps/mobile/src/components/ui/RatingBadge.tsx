import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../../theme';

interface RatingBadgeProps {
  rating: number;
  reviewsCount?: string;
  size?: 'sm' | 'md';
}

export const RatingBadge: React.FC<RatingBadgeProps> = ({
  rating,
  reviewsCount,
  size = 'md',
}) => {
  const isSm = size === 'sm';
  return (
    <View style={styles.container}>
      <Ionicons name="star" size={isSm ? 13 : 16} color={colors.star} />
      <Text style={[styles.ratingText, isSm && styles.ratingTextSm]}>
        {rating.toFixed(1)}
      </Text>
      {reviewsCount && (
        <Text style={[styles.reviewsText, isSm && styles.reviewsTextSm]}>
          ({reviewsCount})
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  ratingText: {
    fontSize: typography.md,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  ratingTextSm: {
    fontSize: typography.sm,
  },
  reviewsText: {
    fontSize: typography.sm,
    color: colors.textSecondary,
    fontWeight: '400',
  },
  reviewsTextSm: {
    fontSize: typography.xs,
  },
});

