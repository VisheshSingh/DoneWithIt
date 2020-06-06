import React from 'react';
import { StyleSheet, Text } from 'react-native';
import AppPicker from './AppPicker';
import { useFormikContext } from 'formik';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'garage', value: 3 },
];

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

const styles = StyleSheet.create({});
