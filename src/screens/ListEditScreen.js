import React from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import AppFormPicker from '../components/AppFormPicker';
import SubmitButton from '../components/SubmitButton';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'garage', value: 3 },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const ListEditScreen = () => {
  return (
    <AppScreen>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => {
          console.log(values);
          Keyboard.dismiss();
        }}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name='title' placeholder='Title' />
        <AppFormField
          maxLength={8}
          name='price'
          placeholder='Price'
          keyboardType='numeric'
          width={150}
        />
        <AppFormPicker
          items={categories}
          name='category'
          placeholder='Category'
          width='50%'
        />
        <AppFormField
          maxLength={255}
          name='description'
          placeholder='Description'
          multiline
          numberOfLines={3}
        />
        <SubmitButton title='Post' />
      </AppForm>
    </AppScreen>
  );
};

export default ListEditScreen;

const styles = StyleSheet.create({});
