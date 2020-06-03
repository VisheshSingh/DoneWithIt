import React from 'react';
import { StyleSheet, Image } from 'react-native';
import AppScreen from '../components/AppScreen';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import { Formik } from 'formik';

const LoginScreen = () => {
  return (
    <AppScreen>
      <Image
        source={require('../../assets/logo-red.png')}
        style={styles.logo}
      />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Email'
              onChangeText={handleChange('email')}
              icon='email'
              keyboardType='email-address'
            />
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Password'
              onChangeText={handleChange('password')}
              icon='lock'
              secureTextEntry
            />
            <AppButton btnText='Login' onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
