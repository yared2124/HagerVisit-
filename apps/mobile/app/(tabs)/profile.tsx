import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_USER } from '../../src/constants/mockData';
import { colors, radii, spacing, typography } from '../../src/theme';

export default function ProfileScreen() {
  const router = useRouter();

  const menuItems = [
    {
      id: 'trips',
      label: 'My Trips',
      icon: 'calendar-outline' as const,
      onPress: () => router.push('/(tabs)/trips' as any),
    },
    {
      id: 'favorites',
      label: 'Favorites',
      icon: 'heart-outline' as const,
      onPress: () => router.push('/(tabs)/saved' as any),
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'settings-outline' as const,
      onPress: () => router.push('/settings' as any),
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: 'help-circle-outline' as const,
      onPress: () => { },
    },
    {
      id: 'about',
      label: 'About HagerVisit',
      icon: 'information-circle-outline' as const,
      onPress: () => router.push('/offline-guides' as any),
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        {/* Top Header */}
        <View style={styles.header}>
          <View style={styles.headerSpacer} />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push('/settings' as any)}
            style={styles.settingsBtn}
          >
            <Ionicons name="settings-outline" size={22} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* User Profile Info */}
          <View style={styles.userSection}>
            <Image source={{ uri: MOCK_USER.avatar }} style={styles.avatar} />
            <Text style={styles.userName}>{MOCK_USER.name}</Text>
            <Text style={styles.userRole}>{MOCK_USER.role}</Text>
          </View>

          {/* Menu Items List */}
          <View style={styles.menuContainer}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.7}
                onPress={item.onPress}
                style={[
                  styles.menuItem,
                  index < menuItems.length - 1 && styles.menuItemBorder,
                ]}
              >
                <View style={styles.menuLeft}>
                  <Ionicons name={item.icon} size={20} color={colors.textPrimary} />
                  <Text style={styles.menuLabel}>{item.label}</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
              </TouchableOpacity>
            ))}
          </View>

          {/* Log Out Button */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.replace('/' as any)}
            style={styles.logoutBtn}
          >
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
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
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  headerSpacer: {
    width: 24,
  },
  settingsBtn: {
    padding: spacing.xs,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xs,
    paddingBottom: spacing.xxl,
    alignItems: 'center',
  },
  userSection: {
    alignItems: 'center',
    gap: 4,
    marginBottom: spacing.xl,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    marginBottom: spacing.xs,
    backgroundColor: '#E8EFEA',
  },
  userName: {
    fontSize: 20,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  userRole: {
    fontSize: typography.sm,
    color: colors.textSecondary,
  },
  menuContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: radii.md,
    marginBottom: spacing.xl,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md + 2,
    paddingHorizontal: spacing.xs,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F2F5F3',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  menuLabel: {
    fontSize: typography.md,
    color: colors.textPrimary,
    fontWeight: typography.medium,
  },
  logoutBtn: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: radii.pill,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FEE2E2',
    backgroundColor: '#FEF2F2',
  },
  logoutText: {
    fontSize: typography.md,
    fontWeight: typography.bold,
    color: colors.danger,
  },
});

