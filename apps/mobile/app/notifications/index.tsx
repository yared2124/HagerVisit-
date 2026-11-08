import React from 'react';
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
import { Ionicons, Feather } from '@expo/vector-icons';
import { useApp } from '../../src/store/AppContext';
import { colors, radii, spacing, typography } from '../../src/theme';

export default function NotificationsScreen() {
  const router = useRouter();
  const { notifications, markNotificationAsRead } = useApp();

  const renderIcon = (type: string, color: string) => {
    switch (type) {
      case 'booking':
        return <Ionicons name="calendar-outline" size={18} color="#FFFFFF" />;
      case 'tour':
        return <Ionicons name="compass-outline" size={18} color="#FFFFFF" />;
      case 'offer':
        return <Feather name="tag" size={17} color="#FFFFFF" />;
      case 'welcome':
        return <Ionicons name="sparkles-outline" size={17} color="#FFFFFF" />;
      case 'review':
        return <Ionicons name="star-outline" size={18} color="#FFFFFF" />;
      default:
        return <Ionicons name="notifications-outline" size={18} color="#FFFFFF" />;
    }
  };

  const handleNotificationPress = (item: any) => {
    markNotificationAsRead(item.id);
    if (item.type === 'booking') {
      router.push('/bookings/confirmed' as any);
    } else if (item.type === 'tour') {
      router.push('/tours' as any);
    }
  };

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
          <Text style={styles.headerTitle}>Notifications</Text>
          <View style={styles.headerSpacer} />
        </View>

        {/* Notifications Feed */}
        {notifications.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollList}
          >
            {notifications.map((item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.7}
                onPress={() => handleNotificationPress(item)}
                style={styles.itemRow}
              >
                <View
                  style={[
                    styles.iconContainer,
                    { backgroundColor: item.iconColor },
                  ]}
                >
                  {renderIcon(item.type, item.iconColor)}
                </View>

                <View style={styles.textContainer}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemTime}>{item.timeAgo}</Text>
                </View>

                <Ionicons name="chevron-forward" size={16} color={colors.textMuted} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <View style={styles.emptyContainer}>
            <Ionicons name="notifications-off-outline" size={48} color={colors.textMuted} />
            <Text style={styles.emptyTitle}>All Caught Up</Text>
            <Text style={styles.emptySubtitle}>You have no new notifications.</Text>
          </View>
        )}
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
    paddingTop: spacing.md,
    paddingBottom: spacing.xxl,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md + 2,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F7F4',
    gap: spacing.md,
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    gap: 2,
  },
  itemTitle: {
    fontSize: typography.md,
    fontWeight: typography.semiBold,
    color: colors.textPrimary,
  },
  itemTime: {
    fontSize: typography.sm,
    color: colors.textMuted,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.xxl,
  },
  emptyTitle: {
    fontSize: typography.lg,
    fontWeight: typography.bold,
    color: colors.textPrimary,
  },
  emptySubtitle: {
    fontSize: typography.sm,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
