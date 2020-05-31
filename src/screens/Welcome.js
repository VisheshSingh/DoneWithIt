import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  View,
  Button,
} from 'react-native';

import colors from '../config/colors';
import AppButton from '../components/AppButton';

const Welcome = () => {
  return (
    <ImageBackground
      blurRadius={3}
      source={require('../../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo-red.png')}
          style={styles.logo}
        />
        <Text style={styles.tagLine}>Sell stuff, you don't need anymore!</Text>
      </View>
      <AppButton
        color={colors.primary}
        btnText='Login'
        propStyle={styles.loginBtn}
        onPress={() => console.log('Login tapped!')}
      />
      <AppButton
        color={colors.secondary}
        btnText='Register'
        propStyle={styles.registerBtn}
        onPress={() => console.log('Register tapped!')}
      />
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    top: '15%',
    position: 'absolute',
    alignItems: 'center',
  },
  loginBtn: {
    height: 50,
    width: '90%',
    margin: 8,
  },
  registerBtn: {
    height: 50,
    width: '90%',
    margin: 8,
  },
  tagLine: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
