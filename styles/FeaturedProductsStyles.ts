import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/theme';

export const useFeaturedProductsStyles = (theme: typeof Colors.light) => {
  return StyleSheet.create({
    container: {
      marginBottom: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: 12,
    },
    scrollView: {
      paddingVertical: 8,
    },
    productItem: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 12,
      marginRight: 16,
      width: 160,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    productImage: {
      width: '100%',
      height: 100,
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
    },
    productEmoji: {
      fontSize: 48,
    },
    productName: {
      fontSize: 14,
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: 4,
    },
    productPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#007AFF',
      marginBottom: 12,
    },
    addButton: {
      backgroundColor: '#007AFF',
      paddingVertical: 8,
      borderRadius: 8,
      alignItems: 'center',
    },
    addButtonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: '600',
    },
  });
};