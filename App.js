import React from 'react'
import { Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screen/Splash';
import Home from './screen/Home';
import Food from './screen/Food';
import Rest from './screen/Rest';
import Sport from './screen/Sport';
import Recreat from './screen/Recreat';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{title: 'ยินดีต้อนรับ'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Food"
          component={Food}
          options={{title: ''}}
        />
        <Stack.Screen
          name="Rest"
          component={Rest}
          options={{title: 'Rest'}}
        />
        <Stack.Screen
          name="Sport"
          component={Sport}
          options={{title: 'Sport'}}
        />
        <Stack.Screen
          name="Recreat"
          component={Recreat}
          options={{title: 'Recreat'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }

export default App
