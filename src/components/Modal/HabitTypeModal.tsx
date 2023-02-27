import React from 'react';
import {Modal, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const HabitTypeModal = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <Modal
      animationType={'fade'}
      visible={showModal}
      onDismiss={handleModalClose}
      onRequestClose={handleModalClose}
      transparent>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Selct Option</Text>
          <TouchableOpacity style={styles.button} onPress={() => console.log('SI/NO')}>
            <Text style={styles.buttonText}>SI/NO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Medible')}>
            <Text style={styles.buttonText}>Medible</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleModalClose}>
            <Text style={styles.buttonTxtClose}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
