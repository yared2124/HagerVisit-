import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Button } from '../../src/components/ui/Button';
import { colors, radii, spacing, typography } from '../../src/theme';

export default function SettingsScreen() {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

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
          <Text style={styles.headerTitle}>Settings</Text>
          <View style={styles.headerSpacer} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollList}
        >
          {/* Setting 1: Language */}
          <TouchableOpacity activeOpacity={0.7} style={styles.itemRow}>
            <View style={styles.itemLeft}>
              <Ionicons name="globe-outline" size={20} color={colors.textPrimary} />
              <Text style={styles.itemLabel}>Language</Text>
            </View>
            <View style={styles.itemRight}>
              <Text style={styles.itemValue}>English</Text>
              <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
            </View>
          </TouchableOpacity>

          {/* Setting 2: Notifications Toggle */}
          <View style={styles.itemRow}>
            <View style={styles.itemLeft}>
              <Ionicons name="notifications-outline" size={20} color={colors.textPrimary} />
              <Text style={styles.itemLabel}>Notifications</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#D9E0DC', true: colors.primary }}
              thumbColor="#FFFFFF"
            />
          </View>

          {/* Setting 3: Privacy & Security */}
          <TouchableOpacity activeOpacity={0.7} style={styles.itemRow}>
            <View style={styles.itemLeft}>
              <Ionicons name="shield-checkmark-outline" size={20} color={colors.textPrimary} />
              <Text style={styles.itemLabel}>Privacy & Security</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
          </TouchableOpacity>

          {/* Setting 4: Data & Storage */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push('/offline-guides' as any)}
            style={styles.itemRow}
          >
            <View style={styles.itemLeft}>
              <Ionicons name="server-outline" size={20} color={colors.textPrimary} />
              <Text style={styles.itemLabel}>Data & Storage</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
          </TouchableOpacity>

          {/* Setting 5: About App */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push('/offline-guides' as any)}
            style={styles.itemRow}
          >
            <View style={styles.itemLeft}>
              <Ionicons name="information-circle-outline" size={20} color={colors.textPrimary} />
              <Text style={styles.itemLabel}>About App</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
          </TouchableOpacity>
        </ScrollView>

        {/* Bottom Button */}
        <View style={styles.footer}>
          <Button
            title="Contact Us"
            onPress={() => Alert.alert('Contact HagerVisit', 'Email: contact@hagervisit.et\nPhone: +251 11 661 0000')}
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
  backBtn: {
    padding: spacing.xs,
  },
  headerTitle: {
    fontSize: typography.xl,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  headerSpacer: {
    width: 24,
  },
  scrollList: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.sm,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F7F4',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  itemLabel: {
    fontSize: typography.md,
    color: colors.textPrimary,
    fontWeight: typography.medium,
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  itemValue: {
    fontSize: typography.sm,
    color: colors.textSecondary,
  },
  footer: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
  },
});

