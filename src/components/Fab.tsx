import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

export const Fab: React.FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.fab}>
      <Text style={styles.fabText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#7856D6',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
