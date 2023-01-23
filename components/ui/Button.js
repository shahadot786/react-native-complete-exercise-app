import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({ children, color , onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} className=" justify-center items-center ">
      <View
        className="w-80 h-12  justify-center items-center  rounded-md mt-4"
        style={{ backgroundColor: color }}
      >
        <Text className=" text-zinc-800 text-center font-bold text-xl">
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
