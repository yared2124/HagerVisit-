import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#F8FAF8' },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(onboarding)/index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="destinations/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="destinations/filters" options={{ presentation: 'modal', headerShown: false }} />
        <Stack.Screen name="tours/index" options={{ headerShown: false }} />
        <Stack.Screen name="hotels/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="bookings/confirmed" options={{ headerShown: false }} />
        <Stack.Screen name="offline-guides/index" options={{ headerShown: false }} />
        <Stack.Screen name="notifications/index" options={{ headerShown: false }} />
        <Stack.Screen name="settings/index" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}

