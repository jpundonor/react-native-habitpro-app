import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import {HabitTypeModal} from '../../components/Modal/HabitTypeModal';

import NavigationHeader from '../../components/Navbar/NavigationHeader';

export const HomeScreen = ({navigation}: {navigation: any}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      <View>
        <NavigationHeader setShowModal={setShowModal} />
        <Text>Home</Text>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      {showModal && <HabitTypeModal showModal setShowModal={setShowModal} />}
    </View>
  );
};
