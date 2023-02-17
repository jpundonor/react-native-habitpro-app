import React from 'react';
import {Text, View, Button} from 'react-native';

export const Home = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};
