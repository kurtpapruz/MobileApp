import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Registration from './screens/Registration';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import { NAVIGATION_CONFIG } from './utils/formConfig';

export default function App() {
  const Stack = createNativeStackNavigator();

  // Component mapping for dynamic navigation
  const componentMap = {
    'Login': Login,
    'Registration': Registration,
    'Dashboard': Dashboard,
    'Profile': Profile
  };

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={NAVIGATION_CONFIG.initialRoute} 
        screenOptions={NAVIGATION_CONFIG.screenOptions}
      >
        {NAVIGATION_CONFIG.screens.map((screen) => (
          <Stack.Screen 
            key={screen.name}
            name={screen.name} 
            component={componentMap[screen.component]}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
