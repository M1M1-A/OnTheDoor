import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import SignUp from './Screens/SignUp'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './Screens/LogIn';
import NewEvent from './Screens/NewEvent';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>   
        <Stack.Navigator initialRouteName='SignUp'>
          <Stack.Screen 
            name='SignUp' 
            component={SignUp}
            options={{
              headerShown: false
            }}
            />
          <Stack.Screen 
            name='LogIn' 
            component={LogIn}
            options={{
              headerShown: false, 
              animationEnabled: false, 
            }}
          />
          <Stack.Screen 
            name='NewEvent' 
            component={NewEvent}
            options={{
              headerShown: true, 
              animationEnabled: false, 
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


