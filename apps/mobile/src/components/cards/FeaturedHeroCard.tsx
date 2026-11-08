import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radii, spacing, typography, shadows } from '../../theme';
import { Destination } from '../../types';

interface FeaturedHeroCardProps {
  destination: Destination;
  onPress: () => void;
}

export const FeaturedHeroCard: React.FC<FeaturedHeroCardProps> = ({
  destination,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.container, shadows.card]}
    >
      <ImageBackground
        source={{ uri: destination.image }}
        style={styles.backgroundImage}
        imageStyle={styles.imageRadius}
      >
        {/* Dark Gradient Overlay */}
        <View style={styles.overlay} />

        {/* Top Floating Badge */}
        <View style={styles.topRow}>
          <View style={styles.view360Badge}>
            <Ionicons name="scan-outline" size={16} color={colors.textInverse} />
          </View>
        </View>

        {/* Bottom Content */}
        <View style={styles.content}>
          <Text style={styles.title}>{destination.title}</Text>
          <Text style={styles.subtitle}>{destination.subtitle}</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.exploreLink}
          >
            <Text style={styles.exploreText}>Explore</Text>
            <Ionicons name="arrow-forward" size={14} color={colors.textInverse} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 220,
    borderRadius: radii.card,
    overflow: 'hidden',
    marginVertical: spacing.md,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    padding: spacing.lg,
  },
  imageRadius: {
    borderRadius: radii.card,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    borderRadius: radii.card,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  view360Badge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    gap: 4,
  },
  title: {
    fontSize: typography.xxl,
    fontWeight: typography.bold,
    color: colors.textInverse,
  },
  subtitle: {
    fontSize: typography.sm,
    color: 'rgba(255, 255, 255, 0.85)',
    marginBottom: spacing.xs,
  },
  exploreLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    alignSelf: 'flex-start',
  },
  exploreText: {
    fontSize: typography.sm,
    fontWeight: typography.bold,
    color: colors.textInverse,
  },
});

