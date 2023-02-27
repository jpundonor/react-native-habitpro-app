// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, View} from 'react-native';

const NavigationHeader = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  function handleShowModal() {
    // const navigation = useNavigation();
    // navigation.navigate('CreateHabitScreen');
    setShowModal(true);
    console.log('CreateHabitScreen');
  }

  return (
    <View>
      <View>
        <Button title="Crear Habito" onPress={handleShowModal} />
      </View>
    </View>
  );
};

export default NavigationHeader;
