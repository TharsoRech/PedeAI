import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/theme';

export const useCategoriesStyles = (theme: typeof Colors.light) => {
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
    categoryItem: {
      alignItems: 'center',
      marginRight: 16,
      backgroundColor: '#fff',
      padding: 12,
      borderRadius: 12,
      minWidth: 80,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 3,
    },
    categoryIcon: {
      fontSize: 24,
      marginBottom: 4,
    },
    categoryName: {
      fontSize: 12,
      color: '#666',
      textAlign: 'center',
    },
  });
};