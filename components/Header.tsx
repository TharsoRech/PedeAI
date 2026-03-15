import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import { useHeaderStyles } from '@/styles/HeaderStyles';

const Header: React.FC = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const styles = useHeaderStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <View style={styles.locationContainer}>
          <Text style={styles.locationLabel}>Entregar em</Text>
          <View style={styles.locationInfo}>
            <Text style={styles.locationText}>Rua Exemplo, 123</Text>
            <Text style={styles.locationTime}>20-30 min</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;