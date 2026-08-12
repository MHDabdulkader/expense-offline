// app/(tabs)/_layout.tsx
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

  return (
    <>
      <NativeTabs
        backgroundColor={colors.background}
        indicatorColor={colors.backgroundElement}
        iconColor={{ default: colors.textSecondary, selected: colors.primary }}
        labelStyle={{ selected: { color: colors.primary } }}>
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf={{ default: 'house', selected: 'house.fill' }} md="home" />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="transactions">
          <NativeTabs.Trigger.Label>Transactions</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon
            sf={{ default: 'list.bullet.rectangle', selected: 'list.bullet.rectangle.fill' }}
            md="receipt_long"
          />
        </NativeTabs.Trigger>

        {/* Hidden placeholder tab reserves the middle slot's tap area/spacing */}
        <NativeTabs.Trigger name="placeholder" hidden />

        <NativeTabs.Trigger name="reports">
          <NativeTabs.Trigger.Label>Reports</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf={{ default: 'chart.pie', selected: 'chart.pie.fill' }} md="pie_chart" />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="profile">
          <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf={{ default: 'person', selected: 'person.fill' }} md="person" />
        </NativeTabs.Trigger>
      </NativeTabs>

      <Pressable
        style={[styles.fab, { backgroundColor: colors.primary }]}
        onPress={() => router.push('/transaction/add')}>
        <Ionicons name="add" size={28} color="#fff" />
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 28, // tune against tab bar height per platform
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
});