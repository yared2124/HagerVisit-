import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path, Circle } from 'react-native-svg';
import { Button } from '../../src/components/ui/Button';
import { useApp } from '../../src/store/AppContext';
import { colors, radii, spacing, typography, shadows } from '../../src/theme';

export default function BookingConfirmedScreen() {
  const router = useRouter();
  const { currentBooking } = useApp();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        {/* Top Status Space */}
        <View style={styles.content}>
          {/* Circular Checkmark with Confetti Sparkles */}
          <View style={styles.celebrationContainer}>
            {/* Confetti Particles (Svg) */}
            <Svg width={180} height={140} viewBox="0 0 180 140" style={styles.confettiSvg}>
              <Circle cx="35" cy="35" r="3" fill="#E5A93C" />
              <Circle cx="145" cy="40" r="3" fill="#144234" />
              <Circle cx="25" cy="75" r="2.5" fill="#E5A93C" />
              <Circle cx="155" cy="80" r="2.5" fill="#F59E0B" />
              <Path d="M45 20 L50 28" stroke="#144234" strokeWidth="2" strokeLinecap="round" />
              <Path d="M130 18 L136 26" stroke="#E5A93C" strokeWidth="2" strokeLinecap="round" />
              <Path d="M20 50 L28 54" stroke="#2B7A60" strokeWidth="2" strokeLinecap="round" />
              <Path d="M160 52 L152 58" stroke="#E5A93C" strokeWidth="2" strokeLinecap="round" />
              <Circle cx="90" cy="12" r="3" fill="#2B7A60" />
            </Svg>

            {/* Checkmark Circle */}
            <View style={styles.checkCircle}>
              <Ionicons name="checkmark" size={42} color="#FFFFFF" />
            </View>
          </View>

          {/* Heading and Subtitle */}
          <View style={styles.textGroup}>
            <Text style={styles.title}>Booking Confirmed!</Text>
            <Text style={styles.subtitle}>
              Your booking has been successfully confirmed.
            </Text>
          </View>

          {/* Booking ID Badge Card */}
          <View style={[styles.bookingCard, shadows.subtle]}>
            <Text style={styles.bookingLabel}>Booking ID</Text>
            <Text style={styles.bookingId}>{currentBooking.bookingId}</Text>
          </View>

          {/* Actions */}
          <View style={styles.actions}>
            <Button
              title="View Booking"
              onPress={() => router.push('/(tabs)/trips' as any)}
              variant="primary"
              size="lg"
            />

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push('/(tabs)' as any)}
              style={styles.homeLink}
            >
              <Text style={styles.homeLinkText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Silhouette of Ethiopian Landmarks (Axum Obelisk, Castles & Churches) */}
        <View style={styles.landmarksContainer}>
          <Svg width="100%" height={90} viewBox="0 0 360 90" preserveAspectRatio="none">
            {/* Soft Background Hills */}
            <Path
              d="M0 90 L0 55 Q90 35 180 50 T360 45 L360 90 Z"
              fill="#EBF3EE"
            />
            {/* Castles and Towers Silhouette */}
            <Path
              d="M70 90 L70 48 L82 48 L82 52 L94 52 L94 48 L106 48 L106 90 Z"
              fill="#CADCD1"
            />
            <Path
              d="M74 48 Q88 32 102 48 Z"
              fill="#B4CEBF"
            />
            {/* Axum Obelisk Tower in center */}
            <Path
              d="M172 90 L176 18 Q180 10 184 18 L188 90 Z"
              fill="#98BFA7"
            />
            <Path d="M177 30 H183 M177 45 H183 M177 60 H183" stroke="#FFFFFF" strokeWidth="1" />
            {/* Lalibela Cross / Roof Silhouette */}
            <Path
              d="M245 90 L245 45 L260 45 L260 38 L270 38 L270 45 L285 45 L285 90 Z"
              fill="#CADCD1"
            />
            <Path
              d="M260 38 Q265 28 270 38 Z"
              fill="#B4CEBF"
            />
          </Svg>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  content: {
    paddingHorizontal: spacing.xxl,
    alignItems: 'center',
    paddingTop: 40,
    gap: spacing.lg,
  },
  celebrationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 120,
    position: 'relative',
  },
  confettiSvg: {
    position: 'absolute',
    top: 0,
  },
  checkCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primaryDark,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  textGroup: {
    alignItems: 'center',
    gap: spacing.xs,
  },
  title: {
    fontSize: 24,
    fontWeight: typography.bold,
    color: colors.primaryDark,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: typography.md,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: spacing.md,
    lineHeight: 20,
  },
  bookingCard: {
    width: '100%',
    backgroundColor: '#F8FAF8',
    borderRadius: radii.card,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
    gap: 4,
    borderWidth: 1,
    borderColor: '#EBF1ED',
  },
  bookingLabel: {
    fontSize: typography.sm,
    color: colors.textSecondary,
  },
  bookingId: {
    fontSize: typography.xl,
    fontWeight: typography.bold,
    color: colors.textPrimary,
    letterSpacing: 0.5,
  },
  actions: {
    width: '100%',
    alignItems: 'center',
    gap: spacing.md,
    marginTop: spacing.sm,
  },
  homeLink: {
    paddingVertical: spacing.xs,
  },
  homeLinkText: {
    fontSize: typography.md,
    fontWeight: typography.bold,
    color: colors.primary,
  },
  landmarksContainer: {
    width: '100%',
    height: 90,
  },
});
