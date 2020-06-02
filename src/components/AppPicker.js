import React, { useState, Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppScreen from './AppScreen';

const AppPicker = ({ icon, placeholder, ...otherProps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={() => setIsModalOpen(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.iconRight}
            />
          )}
          <Text style={styles.textInput}>{placeholder}</Text>
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isModalOpen} animationType='slide'>
        <AppScreen>
          <Button title='close' onPress={() => setIsModalOpen(false)} />
        </AppScreen>
      </Modal>
    </Fragment>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 8,
    borderRadius: 50,
    padding: 15,
    backgroundColor: colors.light2,
    alignItems: 'center',
  },
  iconRight: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 18,
    color: colors.dark,
    flex: 1,
  },
});