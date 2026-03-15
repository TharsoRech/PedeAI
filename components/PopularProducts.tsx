import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import { usePopularProductsStyles } from '@/styles/PopularProductsStyles';

const popularProducts = [
  { id: '1', name: 'Pizza Margherita', price: 'R$ 39,90', image: '🍕', rating: 4.8 },
  { id: '2', name: 'Hambúrguer', price: 'R$ 29,90', image: '🍔', rating: 4.5 },
  { id: '3', name: 'Salada Caesar', price: 'R$ 24,90', image: '🥗', rating: 4.2 },
  { id: '4', name: 'Sushi', price: 'R$ 49,90', image: '🍣', rating: 4.9 },
  { id: '5', name: 'Pasta Carbonara', price: 'R$ 34,90', image: '🍝', rating: 4.6 },
  { id: '6', name: 'Tacos', price: 'R$ 22,90', image: '🌮', rating: 4.3 },
];

const PopularProducts: React.FC = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const styles = usePopularProductsStyles(theme);

  const renderProduct = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.productItem}>
      <View style={styles.productImage}>
        <Text style={styles.productEmoji}>{item.image}</Text>
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>⭐ {item.rating}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos Populares</Text>
      <FlatList
        data={popularProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PopularProducts;