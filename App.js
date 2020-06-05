import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScreenPaso1 from './screens/screenPaso1/ScreenPaso1';
import ScreenPaso2 from './screens/screenPaso2/ScreenPaso2';
import ScreenPaso3 from './screens/screenPaso3/ScreenPaso3';
import Results from './screens/results/Results';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Paso1" component={ScreenPaso1} />
      <Tab.Screen name="Paso2" component={ScreenPaso2} />
      <Tab.Screen name="Paso3" component={ScreenPaso3} />
      <Tab.Screen name="Results" component={Results} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
