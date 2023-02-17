import React, {useState} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const Register = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={styles.label}>Repeat Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sing in</Text>
      </TouchableOpacity>
      <Text style={styles.label}>¿Ya tienes una cuenta?</Text>
      <Button
        title="Ingresa aquí"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};
