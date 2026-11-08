import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors, typography } from '../../theme';

interface HagerLogoProps {
  color?: string;
  accentColor?: string;
  size?: number;
  textColor?: string;
  showText?: boolean;
}

export const HagerLogo: React.FC<HagerLogoProps> = ({
  color = colors.primary,
  accentColor = colors.accent,
  size = 28,
  textColor,
  showText = true,
}) => {
  return (
    <View style={styles.container}>
      <Svg width={size} height={size * 0.75} viewBox="0 0 32 24" fill="none">
        {/* Left Peak */}
        <Path
          d="M3 21L12 4L18 14L15 19H3Z"
          fill={color}
        />
        {/* Right High Peak & Sun Arc */}
        <Path
          d="M14 21L21 8L29 21H14Z"
          fill={color}
          opacity={0.9}
        />
        {/* Peak Highlight Accent */}
        <Path
          d="M21 8L24 14H18L21 8Z"
          fill={accentColor}
        />
      </Svg>
      {showText && (
        <View style={styles.textContainer}>
          <Text style={[styles.brandHager, { color: textColor || colors.primary }]}>
            Hager
          </Text>
          <Text style={[styles.brandVisit, { color: accentColor }]}>
            Visit
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandHager: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  brandVisit: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
});

