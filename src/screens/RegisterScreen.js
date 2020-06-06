import React from 'react';
import { StyleSheet, Image, Keyboard } from 'react-native';
import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const RegisterScreen = () => {
  return (
    <AppScreen>
      <Image
        source={require('../../assets/logo-red.png')}
        style={styles.logo}
      />
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
          Keyboard.dismiss();
        }}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Name'
          name='name'
          icon='account'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Email'
          name='email'
          icon='email'
          keyboardType='email-address'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Password'
          name='password'
          icon='lock'
          secureTextEntry
        />
        <SubmitButton title='Register' />
      </AppForm>
    </AppScreen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
