import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { HagerLogo } from '../src/components/ui/HagerLogo';
import { colors, radii, spacing, typography } from '../src/theme';

export default function WelcomeScreen() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/(onboarding)' as any);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1599818815124-76228302f3a6?q=80&w=1200&auto=format&fit=crop',
        }}
        style={styles.background}
      >
        <View style={styles.gradientOverlay} />

        {/* Brand Header */}
        <View style={styles.centerBrand}>
          <HagerLogo
            color="#FFFFFF"
            accentColor={colors.accent}
            size={40}
            textColor="#FFFFFF"
            showText={true}
          />
          <View style={styles.taglines}>
            <Text style={styles.taglineBold}>Discover Ethiopia</Text>
            <Text style={styles.taglineLight}>Explore More</Text>
          </View>
        </View>

        {/* Bottom Floating Arrow Button */}
        <View style={styles.bottomArea}>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleNext}
            style={styles.floatingButton}
          >
            <Ionicons name="arrow-forward" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingTop: 100,
    paddingBottom: 50,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 25, 20, 0.4)',
  },
  centerBrand: {
    alignItems: 'center',
    gap: spacing.md,
    marginTop: 40,
  },
  taglines: {
    alignItems: 'center',
    gap: 4,
  },
  taglineBold: {
    fontSize: typography.lg,
    fontWeight: typography.bold,
    color: '#FFFFFF',
    letterSpacing: 0.2,
  },
  taglineLight: {
    fontSize: typography.md,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.85)',
  },
  bottomArea: {
    alignItems: 'center',
    marginBottom: 20,
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
});

