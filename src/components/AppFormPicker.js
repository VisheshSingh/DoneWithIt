import React from 'react';
import { Text } from 'react-native';
import AppPicker from './AppPicker';
import { useFormikContext } from 'formik';

const AppFormPicker = ({ items, name, placeholder }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        onSelectItem={(item) => setFieldValue(name, item)}
        items={items}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      {touched[name] && <Text style={{ color: 'red' }}>{errors[name]}</Text>}
    </>
  );
};

export default AppFormPicker;
