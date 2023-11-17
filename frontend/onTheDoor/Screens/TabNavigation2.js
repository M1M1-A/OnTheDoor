import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from "@react-navigation/native";
import Guestlist from "./Guestlist";
import AddGuest from "./AddGuest";
import Dashboard from "./Dashboard";

const Tab = createBottomTabNavigator();

const TabNavigation2 = () => {
  const route = useRoute();
  const { userId, eventId, eventName } = route.params

  return (
      <Tab.Navigator initialRouteName='Guestlist'>
        <Tab.Screen 
          name='Guestlist' 
          component={Guestlist}
          initialParams={{ userId, eventId }} 
          options={{
            headerShown: false, 
            animationEnabled: false, 
          }}
        />
        <Tab.Screen 
          name='AddGuest' 
          component={AddGuest}
          initialParams={{ userId, eventId }} 
          options={{
            headerShown: false, 
            animationEnabled: false, 
          }}
        />
        <Tab.Screen 
          name='Dashboard' 
          component={Dashboard}
          options={{
            headerShown: false, 
            animationEnabled: false, 
          }}
        />
      </Tab.Navigator>
  );
};

export default TabNavigation2;
