import React from 'react';
import { Text, ImageBackground, TouchableOpacity, StyleSheet, View } from 'react-native';
import { colors, radii, spacing, typography, shadows } from '../../theme';
import { Destination } from '../../types';

interface DestinationCarouselCardProps {
  destination: Destination;
  onPress: () => void;
}

export const DestinationCarouselCard: React.FC<DestinationCarouselCardProps> = ({
  destination,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.88}
      onPress={onPress}
      style={[styles.container, shadows.subtle]}
    >
      <ImageBackground
        source={{ uri: destination.image }}
        style={styles.image}
        imageStyle={styles.imageRadius}
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={2}>
            {destination.title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 140,
    borderRadius: radii.md,
    overflow: 'hidden',
    marginRight: spacing.md,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    padding: spacing.sm,
  },
  imageRadius: {
    borderRadius: radii.md,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: radii.md,
  },
  content: {
    zIndex: 1,
  },
  title: {
    fontSize: typography.sm,
    fontWeight: typography.bold,
    color: colors.textInverse,
    lineHeight: 16,
  },
});

