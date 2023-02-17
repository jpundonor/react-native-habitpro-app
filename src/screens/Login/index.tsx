import React, {useState} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const Login = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Correo</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <Button
        title="O inicia sesión con Google"
        onPress={() => console.log('Inicio Google')}
      />
      <View>
        <Text style={styles.label}>¿No tienes una cuenta?</Text>
        <Button
          title="Registrate aquí"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};
