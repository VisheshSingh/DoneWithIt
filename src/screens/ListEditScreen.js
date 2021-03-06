import React from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import AppFormPicker from '../components/AppFormPicker';
import SubmitButton from '../components/SubmitButton';
import CategoryPickerItem from '../components/CategoryPickerItem';

const categories = [
  { label: 'Furniture', value: 1, bgColor: '#fc5c65', icon: 'floor-lamp' },
  { label: 'Cars', value: 2, bgColor: '#fd9644', icon: 'car' },
  { label: 'Cameras', value: 3, bgColor: '#fed330', icon: 'camera' },
  { label: 'Games', value: 4, bgColor: '#26de81', icon: 'cards' },
  { label: 'Clothing', value: 5, bgColor: '#2bcbba', icon: 'shoe-heel' },
  { label: 'Sports', value: 6, bgColor: '#45aaf2', icon: 'basketball' },
  { label: 'Movies & Music', value: 7, bgColor: '#4b7bec', icon: 'headphones' },
  { label: 'Books', value: 8, bgColor: 'purple', icon: 'book' },
  { label: 'Other', value: 9, bgColor: 'grey', icon: 'camera' },
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
          numOfColums={3}
          PickerItemComponent={CategoryPickerItem}
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
