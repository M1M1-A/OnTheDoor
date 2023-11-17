import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from "@react-navigation/native";
import AllEvents from './AllEvents'; 
import NewEvent from "./NewEvent";
import Guestlist from "./Guestlist";
// import NewEvent from '../Screens/NewEvent'; 
// import Login from "../Screens/LogIn"

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const route = useRoute();
  const { userId } = route.params

  return (
      <Tab.Navigator>
        <Tab.Screen 
          name="All Events" 
          component={AllEvents} 
          initialParams={{ userId: userId }} 
          options={{
              headerShown: false, 
              animationEnabled: false, 
          }}
        />
        <Tab.Screen 
          name="New Event" 
          component={NewEvent} 
          initialParams={{ userId: userId }} 
          options={{
              headerShown: false, 
              animationEnabled: false, 
          }}
        />
        {/* <Tab.Screen 
          name='Guestlist' 
          component={Guestlist}
          options={{
            headerShown: true, 
            animationEnabled: false, 
          }}
        /> */}
      </Tab.Navigator>
  );
};

export default TabNavigation;
