import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors, radii, spacing, typography } from '../../theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'lg',
  loading = false,
  disabled = false,
  style,
  textStyle,
  icon,
}) => {
  const getBackgroundColor = () => {
    if (disabled) return colors.border;
    switch (variant) {
      case 'primary':
        return colors.primary;
      case 'secondary':
        return colors.primarySoft;
      case 'white':
        return colors.surface;
      case 'danger':
        return '#FFF1F0';
      case 'outline':
        return 'transparent';
      default:
        return colors.primary;
    }
  };

  const getTextColor = () => {
    if (disabled) return colors.textMuted;
    switch (variant) {
      case 'primary':
        return colors.textInverse;
      case 'secondary':
        return colors.primary;
      case 'white':
        return colors.primaryDark;
      case 'danger':
        return colors.danger;
      case 'outline':
        return colors.primary;
      default:
        return colors.textInverse;
    }
  };

  const getBorderColor = () => {
    if (variant === 'outline') return colors.primary;
    if (variant === 'danger') return colors.danger;
    return 'transparent';
  };

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.base,
        styles[size],
        {
          backgroundColor: getBackgroundColor(),
          borderColor: getBorderColor(),
          borderWidth: variant === 'outline' || variant === 'danger' ? 1.5 : 0,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <>
          {icon}
          <Text
            style={[
              styles.text,
              styles[`${size}Text`],
              { color: getTextColor() },
              textStyle,
            ]}
          >
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.button,
    gap: spacing.sm,
  },
  sm: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 18,
  },
  md: {
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 22,
  },
  lg: {
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 26,
    width: '100%',
  },
  text: {
    fontWeight: typography.bold,
    textAlign: 'center',
  },
  smText: {
    fontSize: typography.sm,
  },
  mdText: {
    fontSize: typography.md,
  },
  lgText: {
    fontSize: typography.lg,
  },
});

