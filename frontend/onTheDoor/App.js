import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './Screens/SignUp/SignUp'
import LogIn from './Screens/Login/LogIn';
import CheckIn from './Screens/CheckIn/CheckIn';
import TabNavigation from './Screens/Navigation/TabNavigation';
import TabNavigation2 from './Screens/Navigation/TabNavigation2';
import styles from './AppStyles'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer style={styles.app}>   
        <Stack.Navigator initialRouteName='LogIn'>
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
            name='CheckIn' 
            component={CheckIn}
            options={{
              headerShown: true, 
              animationEnabled: false, 
            }}
          />
          <Stack.Screen 
            name='TabNavigation' 
            component={TabNavigation}
            options={{
              headerShown: false, 
              animationEnabled: false, 
            }}
          />
          <Stack.Screen 
            name='TabNavigation2' 
            component={TabNavigation2}
            options={{
              headerShown: false, 
              animationEnabled: false, 
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


