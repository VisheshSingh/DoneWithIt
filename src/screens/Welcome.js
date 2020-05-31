import React from 'react';
import { Text, StyleSheet, Image, ImageBackground, View } from 'react-native';

const Welcome = () => {
  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo-red.png')}
          style={styles.logo}
        />
        <Text>Sell stuff, you don't need anymore!</Text>
      </View>
      <View style={styles.loginBtn}></View>
      <View style={styles.registerBtn}></View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  background: {
    flex: 1,
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
    height: 70,
    width: '100%',
    backgroundColor: '#fc5c65',
  },
  registerBtn: {
    height: 70,
    width: '100%',
    backgroundColor: '#4ecdc4',
  },
});
