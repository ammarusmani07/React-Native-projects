

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Home from  './Screens/Home';
 import Details from './Screens/Details';

 export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string}
};
const Stack = createNativeStackNavigator<RootStackParamList>()
function App(): React.JSX.Element {
  


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name='Home'
        component={Home}
        options={
          {
            title:'trending Products'
          }
        }/>
          
        <Stack.Screen 
        name='Details'
        component={Details}
        options={
          {
            title:'prodcut details'
          }
        }/>
          
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App