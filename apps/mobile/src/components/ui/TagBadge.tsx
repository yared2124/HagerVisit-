import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, radii, spacing, typography } from '../../theme';

interface TagBadgeProps {
  label: string;
  variant?: 'neutral' | 'accent' | 'active';
}

export const TagBadge: React.FC<TagBadgeProps> = ({
  label,
  variant = 'neutral',
}) => {
  const getBg = () => {
    switch (variant) {
      case 'active':
        return colors.primary;
      case 'accent':
        return colors.accentLight;
      default:
        return '#EDF2EE';
    }
  };

  const getColor = () => {
    switch (variant) {
      case 'active':
        return colors.textInverse;
      case 'accent':
        return colors.accentDark;
      default:
        return colors.textPrimary;
    }
  };

  return (
    <View style={[styles.badge, { backgroundColor: getBg() }]}>
      <Text style={[styles.text, { color: getColor() }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: radii.pill,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: typography.sm,
    fontWeight: typography.medium,
  },
});

