import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../constant/colors';

const TabButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        top: -40,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: Colors.error,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default TabButton;

const styles = StyleSheet.create({});
