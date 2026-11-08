import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useApp } from '../../src/store/AppContext';
import { colors, radii, spacing, typography } from '../../src/theme';

export default function OfflineGuidesScreen() {
  const router = useRouter();
  const { offlineDownloaded, offlineProgress, downloadOfflineGuides } = useApp();

  const handleDownload = async () => {
    if (offlineDownloaded) {
      Alert.alert('Offline Guides', 'All Ethiopian northern & southern regional circuits are already saved offline.');
      return;
    }
    await downloadOfflineGuides();
    Alert.alert('Download Complete', 'Guides and offline maps for Lalibela, Simien, and Axum are ready.');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
        }}
        style={styles.background}
      >
        <View style={styles.darkOverlay} />

        {/* Back Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.back()}
          style={styles.backBtn}
        >
          <Ionicons name="chevron-back" size={22} color="#FFFFFF" />
        </TouchableOpacity>

        {/* Center Content */}
        <View style={styles.centerContainer}>
          {/* Download Circle Icon */}
          <View style={styles.downloadIconCircle}>
            {offlineDownloaded ? (
              <Ionicons name="checkmark" size={34} color="#FFFFFF" />
            ) : (
              <Feather name="download" size={32} color="#FFFFFF" />
            )}
          </View>

          {/* Heading */}
          <Text style={styles.title}>Offline Guides</Text>

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Download guides for{'\n'}access anytime, anywhere.
          </Text>

          {/* Progress Indicator if downloading */}
          {offlineProgress > 0 && offlineProgress < 100 && (
            <View style={styles.progressBarWrapper}>
              <View style={[styles.progressBarFill, { width: `${offlineProgress}%` }]} />
            </View>
          )}

          {/* Download Now Button */}
          <TouchableOpacity
            activeOpacity={0.88}
            onPress={handleDownload}
            style={styles.downloadButton}
          >
            <Text style={styles.downloadBtnText}>
              {offlineDownloaded
                ? 'Downloaded ✓'
                : offlineProgress > 0 && offlineProgress < 100
                ? `Downloading (${offlineProgress}%)...`
                : 'Download Now'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpacer} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E241B',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xxl,
    paddingTop: 54,
    paddingBottom: 40,
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 28, 20, 0.45)',
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  centerContainer: {
    alignItems: 'center',
    gap: spacing.md,
  },
  downloadIconCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: 28,
    fontWeight: typography.bold,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: typography.md,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: spacing.md,
  },
  progressBarWrapper: {
    width: 200,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    overflow: 'hidden',
    marginVertical: spacing.xs,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.accent,
    borderRadius: 3,
  },
  downloadButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: radii.button,
    minWidth: 200,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  downloadBtnText: {
    fontSize: typography.md,
    fontWeight: typography.bold,
    color: colors.primaryDark,
  },
  bottomSpacer: {
    height: 20,
  },
});
