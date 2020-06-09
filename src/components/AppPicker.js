import React, { useState, Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Button,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppScreen from './AppScreen';
import PickerItem from './PickerItem';

const AppPicker = ({
  icon,
  items,
  onSelectItem,
  selectedItem,
  placeholder,
  width = '100%',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={() => setIsModalOpen(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.iconRight}
            />
          )}
          {selectedItem ? (
            <Text style={styles.textInput}>{selectedItem.label}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isModalOpen} animationType='slide'>
        <AppScreen>
          <View style={styles.btnStyle}>
            <Button title='close' onPress={() => setIsModalOpen(false)} />
          </View>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setIsModalOpen(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </AppScreen>
      </Modal>
    </Fragment>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // marginVertical: 8,
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
  btnStyle: {
    marginHorizontal: 10,
  },
  placeholder: {
    flex: 1,
    color: colors.grey,
  },
});
