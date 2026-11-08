import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../../src/components/ui/Button';
import { colors, radii, spacing, typography } from '../../src/theme';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const router = useRouter();

  const handleFinish = () => {
    router.replace('/(tabs)' as any);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Top Hero Image with Organic Curved Mask */}
      <View style={styles.heroContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
          }}
          style={styles.heroImage}
        />
        {/* Soft Wave Curved Bottom Edge */}
        <View style={styles.waveCutout} />
      </View>

      {/* Bottom Content Area */}
      <View style={styles.content}>
        <View style={styles.textGroup}>
          <Text style={styles.headline}>Explore Ethiopia</Text>
          <Text style={styles.headlineSub}>Like Never Before</Text>
          <Text style={styles.description}>
            Discover breathtaking places, plan your trip and more.
          </Text>
        </View>

        {/* Stepper Dots (Active Middle Dot) */}
        <View style={styles.stepperContainer}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
        </View>

        {/* Action Buttons */}
        <View style={styles.actionGroup}>
          <Button
            title="Get Started"
            onPress={handleFinish}
            variant="primary"
            size="lg"
          />

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleFinish}
            style={styles.skipButton}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  heroContainer: {
    width: '100%',
    height: '52%',
    position: 'relative',
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  waveCutout: {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    height: 36,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.xxl,
    paddingTop: spacing.md,
    paddingBottom: spacing.xxl,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textGroup: {
    alignItems: 'center',
    gap: 4,
    marginTop: spacing.sm,
  },
  headline: {
    fontSize: 28,
    fontWeight: typography.bold,
    color: colors.primaryDark,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  headlineSub: {
    fontSize: 28,
    fontWeight: typography.bold,
    color: colors.primaryDark,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  description: {
    fontSize: typography.md,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.sm,
    paddingHorizontal: spacing.md,
    lineHeight: 22,
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginVertical: spacing.md,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D6DDD9',
  },
  dotActive: {
    width: 20,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  actionGroup: {
    width: '100%',
    alignItems: 'center',
    gap: spacing.md,
  },
  skipButton: {
    paddingVertical: spacing.xs,
  },
  skipText: {
    fontSize: typography.md,
    color: colors.textSecondary,
    fontWeight: typography.medium,
  },
});

