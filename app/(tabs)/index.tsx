import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';

// Import components
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import PopularProducts from '@/components/PopularProducts';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header />
        <SearchBar />
        <Categories />
        <FeaturedProducts />
        <PopularProducts />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
});