import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../src/components/ui/Button';
import { ItineraryCard } from '../../src/components/cards/ItineraryCard';
import { MOCK_ITINERARY } from '../../src/constants/mockData';
import { colors, radii, spacing, typography, shadows } from '../../src/theme';

export default function PlanTripScreen() {
  const router = useRouter();
  const [destinationText, setDestinationText] = useState('Add Destination');
  const [datesText, setDatesText] = useState('Select Dates');
  const [travelersCount, setTravelersCount] = useState(1);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.back()}
            style={styles.backBtn}
          >
            <Ionicons name="chevron-back" size={22} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Plan Your Trip</Text>
          <View style={styles.headerRightPlaceholder} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Trip Builder Inputs */}
          <View style={styles.formContainer}>
            {/* Input 1: Destination */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setDestinationText('Lalibela & Gondar')}
              style={[styles.inputCard, shadows.subtle]}
            >
              <View style={styles.inputLeft}>
                <Ionicons name="location-outline" size={20} color={colors.textSecondary} />
                <Text
                  style={[
                    styles.inputText,
                    destinationText !== 'Add Destination' && styles.inputTextActive,
                  ]}
                >
                  {destinationText}
                </Text>
              </View>
              <Ionicons name="add" size={20} color={colors.textSecondary} />
            </TouchableOpacity>

            {/* Input 2: Dates */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setDatesText('Nov 12 - Nov 16, 2026')}
              style={[styles.inputCard, shadows.subtle]}
            >
              <View style={styles.inputLeft}>
                <Ionicons name="calendar-outline" size={20} color={colors.textSecondary} />
                <Text
                  style={[
                    styles.inputText,
                    datesText !== 'Select Dates' && styles.inputTextActive,
                  ]}
                >
                  {datesText}
                </Text>
              </View>
              <Ionicons name="add" size={20} color={colors.textSecondary} />
            </TouchableOpacity>

            {/* Input 3: Travelers */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setTravelersCount((prev) => (prev % 4) + 1)}
              style={[styles.inputCard, shadows.subtle]}
            >
              <View style={styles.inputLeft}>
                <Ionicons name="person-outline" size={20} color={colors.textSecondary} />
                <Text style={styles.inputTextActive}>
                  {travelersCount} Traveler{travelersCount > 1 ? 's' : ''}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={colors.textSecondary} />
            </TouchableOpacity>

            {/* Primary Action Button */}
            <Button
              title="Create Itinerary"
              onPress={() => router.push('/tours' as any)}
              variant="primary"
              size="lg"
              style={styles.createBtn}
            />
          </View>

          {/* Section: My Itineraries */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Itineraries</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push('/tours' as any)}
            >
              <Text style={styles.seeAllText}>See all →</Text>
            </TouchableOpacity>
          </View>

          {/* Saved Itinerary Card */}
          <ItineraryCard
            itinerary={MOCK_ITINERARY}
            onPress={() => router.push('/tours' as any)}
          />
        </ScrollView>
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
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: '#FFFFFF',
  },
  backBtn: {
    padding: spacing.xs,
  },
  headerTitle: {
    fontSize: typography.lg,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  headerRightPlaceholder: {
    width: 28,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  formContainer: {
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  inputCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: radii.md,
    paddingHorizontal: spacing.lg,
    height: 52,
    borderWidth: 1,
    borderColor: '#EEF2EF',
  },
  inputLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  inputText: {
    fontSize: typography.md,
    color: colors.textMuted,
  },
  inputTextActive: {
    fontSize: typography.md,
    color: colors.textPrimary,
    fontWeight: typography.medium,
  },
  createBtn: {
    marginTop: spacing.sm,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: typography.cardTitle.fontSize,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  seeAllText: {
    fontSize: typography.sm,
    color: colors.textSecondary,
    fontWeight: typography.medium,
  },
});

