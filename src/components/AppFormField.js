import React from 'react';
import { Text } from 'react-native';
import { useFormikContext } from 'formik';
import AppTextInput from './AppTextInput';

const AppFormField = ({ name, width, ...otherProps }) => {
  const { handleChange, errors, touched, setFieldTouched } = useFormikContext();
  return (
    <>
      <AppTextInput
        width={width}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      {touched[name] && <Text style={{ color: 'red' }}>{errors[name]}</Text>}
    </>
  );
};

export default AppFormField;
