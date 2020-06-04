import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import AppScreen from '../components/AppScreen';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppFormField from '../components/AppFormField';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

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
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
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
