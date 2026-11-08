import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radii, spacing, typography, shadows } from '../../theme';
import { Tour } from '../../types';

interface TourCardProps {
  tour: Tour;
  onPress: () => void;
  onFavoritePress?: () => void;
}

export const TourCard: React.FC<TourCardProps> = ({
  tour,
  onPress,
  onFavoritePress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.container, shadows.card]}
    >
      <ImageBackground
        source={{ uri: tour.image }}
        style={styles.image}
        imageStyle={styles.imageRadius}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onFavoritePress}
          style={styles.favoriteButton}
        >
          <Ionicons
            name={tour.isFavorite ? 'heart' : 'heart-outline'}
            size={18}
            color={colors.favorite}
          />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.info}>
        <Text style={styles.title}>{tour.title}</Text>
        <View style={styles.bottomRow}>
          <Text style={styles.price}>{tour.price}</Text>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={14} color={colors.star} />
            <Text style={styles.ratingText}>{tour.rating.toFixed(1)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: radii.card,
    overflow: 'hidden',
    marginBottom: spacing.lg,
  },
  image: {
    width: '100%',
    height: 150,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: spacing.md,
  },
  imageRadius: {
    borderTopLeftRadius: radii.card,
    borderTopRightRadius: radii.card,
  },
  favoriteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    padding: spacing.md,
    gap: spacing.xs,
  },
  title: {
    fontSize: typography.md,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  price: {
    fontSize: typography.md,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: typography.sm,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
});

