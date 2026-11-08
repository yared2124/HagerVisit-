import React, { useState } from 'react';
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
import { Button } from '../../src/components/ui/Button';
import { colors, radii, spacing, typography } from '../../src/theme';

interface CategoriesState {
  Nature: boolean;
  Culture: boolean;
  Adventure: boolean;
  Heritage: boolean;
}

export default function FiltersModalScreen() {
  const router = useRouter();

  const [categories, setCategories] = useState<CategoriesState>({
    Nature: true,
    Culture: false,
    Adventure: false,
    Heritage: false,
  });

  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(500);

  const toggleCategory = (key: keyof CategoriesState) => {
    setCategories((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.placeholder} />
          <Text style={styles.headerTitle}>Filters</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.back()}
            style={styles.closeBtn}
          >
            <Ionicons name="close" size={24} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {/* Section: Category */}
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Category</Text>
            <View style={styles.optionsList}>
              {(Object.keys(categories) as (keyof CategoriesState)[]).map((cat) => {
                const isChecked = categories[cat];
                return (
                  <TouchableOpacity
                    key={cat}
                    activeOpacity={0.7}
                    onPress={() => toggleCategory(cat)}
                    style={styles.checkboxRow}
                  >
                    <Text style={styles.checkboxLabel}>{cat}</Text>
                    <View
                      style={[
                        styles.checkbox,
                        isChecked && styles.checkboxChecked,
                      ]}
                    >
                      {isChecked && (
                        <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Section: Price Range */}
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Price Range</Text>

            {/* Slider Visual */}
            <View style={styles.sliderContainer}>
              <View style={styles.sliderTrackBackground}>
                {/* Active Slider Track */}
                <View style={[styles.sliderTrackActive, { left: '10%', right: '25%' }]} />
              </View>

              {/* Slider Handles */}
              <View style={[styles.sliderThumb, { left: '8%' }]} />
              <View style={[styles.sliderThumb, { right: '23%' }]} />
            </View>

            {/* Price Labels */}
            <View style={styles.priceLabels}>
              <Text style={styles.priceText}>${priceMin}</Text>
              <Text style={styles.priceText}>${priceMax}+</Text>
            </View>
          </View>
        </View>

        {/* Bottom Button */}
        <View style={styles.footer}>
          <Button
            title="Apply Filters"
            onPress={() => router.back()}
            variant="primary"
            size="lg"
          />
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F5F3',
  },
  placeholder: {
    width: 24,
  },
  headerTitle: {
    fontSize: typography.lg,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  closeBtn: {
    padding: spacing.xs,
  },
  content: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    gap: spacing.xxl,
  },
  section: {
    gap: spacing.md,
  },
  sectionHeading: {
    fontSize: typography.cardTitle.fontSize,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  optionsList: {
    gap: spacing.md,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.xs,
  },
  checkboxLabel: {
    fontSize: typography.md,
    color: colors.textPrimary,
    fontWeight: typography.medium,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#D0DDD5',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  sliderContainer: {
    height: 36,
    justifyContent: 'center',
    position: 'relative',
    marginTop: spacing.sm,
  },
  sliderTrackBackground: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#E5EDE7',
    width: '100%',
    position: 'relative',
  },
  sliderTrackActive: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  sliderThumb: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  priceLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  priceText: {
    fontSize: typography.md,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  footer: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
  },
});

