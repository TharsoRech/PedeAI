import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import { useCategoriesStyles } from '@/styles/CategoriesStyles';

const categories = [
  { id: '1', name: 'Comida', icon: '🍔' },
  { id: '2', name: 'Bebidas', icon: '🥤' },
  { id: '3', name: 'Mercado', icon: '🛒' },
  { id: '4', name: 'Farmácia', icon: '💊' },
  { id: '5', name: 'Pets', icon: '🐾' },
  { id: '6', name: 'Outros', icon: '📦' },
];

const Categories: React.FC = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const styles = useCategoriesStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;