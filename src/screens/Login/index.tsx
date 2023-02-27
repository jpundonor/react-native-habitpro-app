import React from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useForm} from '../../hooks';
import {styles} from './styles';

// interface LoginValues {
//   email: string;
//   password: string;
// }

const validators = {
  email: (value: string) => {
    if (!value) {
      return 'Email is required';
    }
    if (!/\S+@\S+\.\S+/.test(value)) {
      return 'Invalid email format';
    }
    return ''; // Devuelve una cadena vacía si el valor es válido
  },
  password: (value: string) => {
    if (!value) {
      return 'Password is required';
    }
    if (value.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    return ''; // Devuelve una cadena vacía si el valor es válido
  },
};

export const Login = ({navigation}: {navigation: any}) => {
  const {values, errors, handleChange, handleSubmit} = useForm({
    initialValues: {email: '', password: ''},
    onSubmit: value => {
      navigation.navigate('Home');
      console.log(value);
    },
    validators,
  });

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Correo</Text>
      <TextInput
        style={styles.input}
        value={values.email}
        onChangeText={value => handleChange('email', value)}
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errors.email && <Text>{errors.email}</Text>}

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        value={values.password}
        onChangeText={value => handleChange('password', value)}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errors.password && <Text>{errors.password}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <Button title="O inicia sesión con Google" onPress={onGoogleSignIn} />
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
