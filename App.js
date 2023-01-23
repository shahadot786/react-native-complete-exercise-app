import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { OnBoardScreen, IntroScreen } from './screens';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import Tabs from './components/functional/Tabs';

const Stack = createStackNavigator();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  function HomeTab() {
    return <Tabs />;
  }

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          {!isFirstLaunch && (
            <Stack.Screen
              name="onBoard"
              component={OnBoardScreen}
              options={{ headerShown: false }}
            />
          )}
          <Stack.Screen
            name="HomeTab"
            component={HomeTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="IntroScreen"
            component={IntroScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
