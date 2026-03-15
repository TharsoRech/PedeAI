import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/theme';

export const useHeaderStyles = (theme: typeof Colors.light) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      paddingVertical: 16,
      paddingHorizontal: 16,
    },
    headerContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    locationContainer: {
      flex: 1,
    },
    locationLabel: {
      fontSize: 12,
      color: theme.text,
      marginBottom: 4,
    },
    locationInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    locationText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.text,
      marginRight: 8,
    },
    locationTime: {
      fontSize: 12,
      color: '#666',
      backgroundColor: '#f0f0f0',
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 12,
    },
    editButton: {
      backgroundColor: '#f0f0f0',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 16,
    },
    editButtonText: {
      fontSize: 12,
      color: '#666',
      fontWeight: '500',
    },
  });
};