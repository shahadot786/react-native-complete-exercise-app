import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React from 'react';
import Images from '../../constant/Images';
import Colors from '../../constant/colors';
import Button from '../../components/ui/Button';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmitHandler = () => {
    if (email && password) {
      setIsSubmit(true);
    } else {
      Alert.alert('Error', 'Empty or Invalid Input', [
        {
          text: 'OK',
          style: 'cancel',
          onPress: () => console.log('OK Pressed'),
        },
      ]);
    }
  };

  return (
    <ScrollView className="flex-1 bg-zinc-800">
      <KeyboardAvoidingView behavior="padding">
        <View className="flex-1 pt-10 ">
          <View className="justify-center items-center">
            <Image
              className="w-80 h-56 m-4 rounded-xl opacity-80"
              source={{ uri: Images.signInImage }}
            />
            <Text className="text-white text-2xl font-bold border-b-2 border-b-gray-600">
              NOTE APP
            </Text>
          </View>

          <View className="justify-center items-center mt-2 mb-4">
            <TextInput
              onChangeText={(email) => setEmail(email)}
              autoCapitalize="none"
              autoComplete="off"
              placeholder="Enter your email"
              placeholderTextColor={Colors.light}
              className="pl-4 w-80 h-12 border-2 mt-4 border-gray-600 rounded-md text-white"
            />
            <TextInput
              onChangeText={(password) => setPassword(password)}
              secureTextEntry
              placeholder="Enter your password"
              placeholderTextColor={Colors.light}
              className="pl-4 w-80 h-12 border-2 mt-4 border-gray-600 rounded-md text-white"
            />
          </View>
          <View className="mb-8">
            <Button onPress={onSubmitHandler} color={Colors.success}>
              SIGN IN
            </Button>
            <Text className="text-center mt-2 text-white">
              Register an account!
            </Text>
            <Button
              onPress={() => navigation.navigate('SignUp')}
              color={Colors.warning}
            >
              REGISTER
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignInScreen;
