import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radii, spacing, typography, shadows } from '../../theme';
import { Destination } from '../../types';

interface FavoriteCardProps {
  destination: Destination;
  onPress: () => void;
  onRemoveFavorite?: () => void;
}

export const FavoriteCard: React.FC<FavoriteCardProps> = ({
  destination,
  onPress,
  onRemoveFavorite,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.88}
      onPress={onPress}
      style={[styles.container, shadows.card]}
    >
      <ImageBackground
        source={{ uri: destination.image }}
        style={styles.image}
        imageStyle={styles.imageRadius}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onRemoveFavorite}
          style={styles.heartBadge}
        >
          <Ionicons name="heart" size={16} color={colors.favorite} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {destination.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    overflow: 'hidden',
    marginBottom: spacing.md,
    marginHorizontal: spacing.xs,
  },
  image: {
    width: '100%',
    height: 120,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: spacing.xs + 2,
  },
  imageRadius: {
    borderTopLeftRadius: radii.md,
    borderTopRightRadius: radii.md,
  },
  heartBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    padding: spacing.sm,
    backgroundColor: colors.surface,
  },
  title: {
    fontSize: typography.sm,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
});

