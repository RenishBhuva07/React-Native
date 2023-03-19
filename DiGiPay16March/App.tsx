import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginLogics from './SRC/LoginLogics';
import Dashboard from './SRC/Dashboard';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name='Login' component={LoginLogics} />
          <Stack.Screen name='Dashboard' component={Dashboard} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
