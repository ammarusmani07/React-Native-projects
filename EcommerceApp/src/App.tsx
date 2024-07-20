
import React from 'react'

// Navigation
import { NavigationContainer,Theme,DefaultTheme,DarkTheme} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { useColorScheme } from 'react-native'
// screens
import Home from './screens/Home'
import Details from './screens/Details'
import { ThemeProvider } from './ThemeContext'

export type RootStackPramList = {
  Home: undefined;
  Details: {product: Product}
}

const Stack = createNativeStackNavigator<RootStackPramList>()
const App = () => {
const scheme=useColorScheme()
  
  return (
    <ThemeProvider>
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme} >
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Trending Glocks "
        }}
        />
        <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: "Glock details"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  )
}

export default App