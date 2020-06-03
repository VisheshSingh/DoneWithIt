import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import AppScreen from '../components/AppScreen';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <AppScreen>
      <Image
        source={require('../../assets/logo-red.png')}
        style={styles.logo}
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Email'
        onChangeText={(text) => setEmail(text)}
        icon='email'
        keyboardType='email-address'
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Password'
        onChangeText={(text) => setPassword(text)}
        icon='lock'
        secureTextEntry
      />
      <AppButton btnText='Login' onPress={() => console.log(email, password)} />
    </AppScreen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
