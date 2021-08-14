import 'react-native-gesture-handler';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, combineReducers } from 'redux';
import mealReducer from './store/reducers/meals';
import { Provider } from 'react-redux';

import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

const rootReducer = combineReducers({
  meals: mealReducer,
});

const store = createStore(rootReducer);


export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MealsNavigator />
      </NavigationContainer>
    </Provider>
  );
}
