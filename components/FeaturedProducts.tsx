import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import { useFeaturedProductsStyles } from '@/styles/FeaturedProductsStyles';

const featuredProducts = [
  { id: '1', name: 'Pizza Margherita', price: 'R$ 39,90', image: '🍕' },
  { id: '2', name: 'Hambúrguer', price: 'R$ 29,90', image: '🍔' },
  { id: '3', name: 'Salada Caesar', price: 'R$ 24,90', image: '🥗' },
  { id: '4', name: 'Sushi', price: 'R$ 49,90', image: '🍣' },
];

const FeaturedProducts: React.FC = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const styles = useFeaturedProductsStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos em Destaque</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {featuredProducts.map((product) => (
          <TouchableOpacity key={product.id} style={styles.productItem}>
            <View style={styles.productImage}>
              <Text style={styles.productEmoji}>{product.image}</Text>
            </View>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Adicionar</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedProducts;