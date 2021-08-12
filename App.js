import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   });
// }

export default function App() {

  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // if (!fontsLoaded) {
  //   <AppLoading
  //     startAsync={fetchFonts}
  //     onFinish={() => setFontsLoaded(true)}
  //   />
  // }

  return (
    <NavigationContainer>
      <MealsNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
