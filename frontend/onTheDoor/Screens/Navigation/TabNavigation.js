import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRoute } from "@react-navigation/native";
import AllEvents from "../AllEvents/AllEvents";
import NewEvent from "../NewEvent/NewEvent";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const route = useRoute();
  const { userId } = route.params;

  return (
    <Tab.Navigator initialRouteName="All Events">
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
    </Tab.Navigator>
  );
};

export default TabNavigation;