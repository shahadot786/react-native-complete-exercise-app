import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import {
  AccountScreen,
  HomeScreen,
  SearchScreen,
  SettingsScreen,
  NoteScreen,
  ShopScreen,
  SignInScreen,
} from '../../screens';
import Colors from '../../constant/colors';
import TabButton from '../ui/TabButton';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      // screenOptions={() => ({
      //   headerShown: false,
      //   tabBarShowLabel: true,
      //   tabBarStyle: {
      //     height: 65,
      //     paddingHorizontal: 0,
      //     paddingTop: 4,
      //     paddingBottom: 6,
      //     backgroundColor: '#1b1b1d',
      //     position: 'absolute',
      //     borderTopWidth: 0,
      //   },
      //   tabBarActiveTintColor: '#15c55d',
      //   tabBarInactiveTintColor: '#d5ffdb',
      //   tabBarLabelStyle: {
      //     fontSize: 12, marginTop:2,
      //     margin: 0,
      //   },
      // })}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: Colors.dark,
          borderRadius: 15,
          height: 90,
          borderTopWidth: 0,
          ...styles.shadow,
        },
        tabBarActiveTintColor: '#15c55d',
        tabBarInactiveTintColor: '#d5ffdb',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <View className="items-center justify-center top-2">
              <FontAwesome name="home" color={color} size={30} />
              <Text
                className="items-center justify-center"
                style={{ color: color, fontSize: 12, marginTop: 2 }}
              >
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Note"
        component={SignInScreen}
        options={{
          tabBarLabel: 'Note',
          tabBarIcon: ({ color }) => (
            <View className="items-center justify-center top-2">
              <FontAwesome name="sticky-note" color={color} size={30} />
              <Text
                className="items-center justify-center"
                style={{ color: color, fontSize: 12, marginTop: 2 }}
              >
                NOTE
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color }) => (
            <View className="items-center justify-center top-2 mb-4">
              <FontAwesome name="plus" color={color} size={40} />
            </View>
          ),
          tabBarButton: (props) => <TabButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <View className="items-center justify-center top-2">
              <FontAwesome name="user" color={color} size={30} />
              <Text
                className="items-center justify-center"
                style={{ color: color, fontSize: 12, marginTop: 2 }}
              >
                ACCOUNT
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <View className="items-center justify-center top-2">
              <FontAwesome name="gear" color={color} size={30} />
              <Text
                className="items-center justify-center"
                style={{ color: color, fontSize: 12, marginTop: 2 }}
              >
                SETTINGS
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#15c55d',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
});
