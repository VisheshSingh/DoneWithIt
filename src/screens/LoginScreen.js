import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import AppScreen from '../components/AppScreen';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import { Formik } from 'formik';
import * as Yup from 'yup';

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
        {({ handleChange, handleSubmit, errors, touched, setFieldTouched }) => (
          <>
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Email'
              onBlur={() => setFieldTouched('email')}
              onChangeText={handleChange('email')}
              icon='email'
              keyboardType='email-address'
            />
            {touched.email && (
              <Text style={{ color: 'red' }}>{errors.email}</Text>
            )}
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Password'
              onBlur={() => setFieldTouched('password')}
              onChangeText={handleChange('password')}
              icon='lock'
              secureTextEntry
            />
            {touched.password && (
              <Text style={{ color: 'red' }}>{errors.password}</Text>
            )}
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
