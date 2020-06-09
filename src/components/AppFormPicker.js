import React from 'react';
import { Text } from 'react-native';
import AppPicker from './AppPicker';
import { useFormikContext } from 'formik';

const AppFormPicker = ({
  items,
  name,
  PickerItemComponent,
  placeholder,
  width,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        onSelectItem={(item) => setFieldValue(name, item)}
        items={items}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      {touched[name] && <Text style={{ color: 'red' }}>{errors[name]}</Text>}
    </>
  );
};

export default AppFormPicker;
