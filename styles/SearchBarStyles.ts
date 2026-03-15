import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/theme';

export const useSearchBarStyles = (theme: typeof Colors.light) => {
  return StyleSheet.create({
    container: {
      marginBottom: 16,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 25,
      paddingHorizontal: 16,
      paddingVertical: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    searchInput: {
      flex: 1,
      fontSize: 16,
      color: theme.text,
    },
    searchButton: {
      marginLeft: 12,
    },
    searchButtonText: {
      fontSize: 24,
    },
  });
};