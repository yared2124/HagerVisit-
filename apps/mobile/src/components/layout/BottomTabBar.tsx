import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';
import { colors, spacing, typography } from '../../theme';

export interface TabItem {
  name: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  activeIcon: keyof typeof Ionicons.glyphMap;
  route: string;
}

export const TABS: TabItem[] = [
  {
    name: 'home',
    label: 'Home',
    icon: 'home-outline',
    activeIcon: 'home',
    route: '/(tabs)',
  },
  {
    name: 'explore',
    label: 'Explore',
    icon: 'compass-outline',
    activeIcon: 'compass',
    route: '/(tabs)/explore',
  },
  {
    name: 'trips',
    label: 'Trips',
    icon: 'calendar-outline',
    activeIcon: 'calendar',
    route: '/(tabs)/trips',
  },
  {
    name: 'saved',
    label: 'Saved',
    icon: 'heart-outline',
    activeIcon: 'heart',
    route: '/(tabs)/saved',
  },
  {
    name: 'profile',
    label: 'Profile',
    icon: 'person-outline',
    activeIcon: 'person',
    route: '/(tabs)/profile',
  },
];

interface BottomTabBarProps {
  activeTab?: string;
  onSelectTab?: (tabName: string) => void;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  activeTab = 'home',
  onSelectTab,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handlePress = (tab: TabItem) => {
    if (onSelectTab) {
      onSelectTab(tab.name);
    } else {
      router.push(tab.route as any);
    }
  };

  const getIsActive = (tab: TabItem) => {
    if (activeTab) return activeTab === tab.name;
    if (tab.route === '/(tabs)' && (pathname === '/' || pathname === '/(tabs)')) return true;
    return pathname.startsWith(tab.route);
  };

  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = getIsActive(tab);
        return (
          <TouchableOpacity
            key={tab.name}
            activeOpacity={0.7}
            onPress={() => handlePress(tab)}
            style={styles.tabButton}
          >
            <Ionicons
              name={isActive ? tab.activeIcon : tab.icon}
              size={22}
              color={isActive ? colors.primary : '#8FA099'}
            />
            <Text
              style={[
                styles.tabLabel,
                { color: isActive ? colors.primary : '#8FA099', fontWeight: isActive ? '600' : '400' },
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EFF3F0',
    paddingVertical: spacing.sm,
    paddingBottom: Platform.OS === 'ios' ? 24 : spacing.sm,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    paddingHorizontal: spacing.sm,
  },
  tabLabel: {
    fontSize: 11,
  },
});

