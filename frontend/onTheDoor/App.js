import SignUp from './Screens/SignUp'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './Screens/LogIn';
import NewEvent from './Screens/NewEvent';
import Guestlist from './Screens/Guestlist';
import CheckIn from './Screens/CheckIn';
import AddGuest from './Screens/AddGuest'
import AllEvents from './Screens/AllEvents';
import Dashboard from './Screens/Dashboard';
import TabNavigation from './Screens/TabNavigation';
import TabNavigation2 from './Screens/TabNavigation2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>   
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
            name='AllEvents' 
            component={AllEvents}
            options={{
              headerShown: true, 
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
          {/* <Stack.Screen 
            name='Guestlist' 
            component={Guestlist}
            options={{
              headerShown: true, 
              animationEnabled: false, 
            }}
          /> */}
          <Stack.Screen 
            name='CheckIn' 
            component={CheckIn}
            options={{
              headerShown: true, 
              animationEnabled: false, 
            }}
          />
          {/* <Stack.Screen 
            name='AddGuest' 
            component={AddGuest}
            options={{
              headerShown: true, 
              animationEnabled: false, 
            }}
          /> */}
          {/* <Stack.Screen 
            name='Dashboard' 
            component={Dashboard}
            options={{
              headerShown: true, 
              animationEnabled: false, 
            }}
          /> */}
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


