import {
  View,
  Text,
  Image,
} from 'react-native';
import React from 'react';
import Images from '../../constant/Images';
import Colors from '../../constant/colors';
import Button from '../../components/ui/Button';
import { useNavigation } from '@react-navigation/native';

const NoteScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 pt-10 bg-zinc-800">
      <View className="justify-center items-center">
        <Image
          className="w-80 h-56 m-4 rounded-xl opacity-80"
          source={{ uri: Images.signInImage }}
        />
        <Text className="text-white text-2xl font-bold border-b-2 border-b-gray-600">
          NOTE APP
        </Text>
      </View>
      <View className="mt-12">
        <Button
          onPress={() => navigation.navigate('SignIn')}
          color={Colors.success}
        >
          SIGN IN
        </Button>
        <Button
          onPress={() => navigation.navigate('SignUp')}
          color={Colors.warning}
        >
          REGISTER
        </Button>
      </View>
    </View>
  );
};

export default NoteScreen;
