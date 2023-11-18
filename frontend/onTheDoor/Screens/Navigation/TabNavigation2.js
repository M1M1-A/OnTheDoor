import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRoute } from "@react-navigation/native";
import { Image } from "react-native";
import Guestlist from "../Guestlist/Guestlist";
import AddGuest from "../AddGuest/AddGuest";
import Dashboard from "../Dashboard/Dashboard";

const Tab = createBottomTabNavigator();

const TabNavigation2 = () => {
  const route = useRoute();
  const { userId, eventId } = route.params;

  return (
    <Tab.Navigator initialRouteName="Guestlist">
      <Tab.Screen
        name="Guestlist"
        component={Guestlist}
        initialParams={{ userId, eventId }}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/contact-list.png")}
              style={{ width: 30, height: 30, tintColor: "#183D3D" }}
            />
          ),
          headerShown: false,
          animationEnabled: false,
        }}
      />
      <Tab.Screen
        name="AddGuest"
        component={AddGuest}
        initialParams={{ userId, eventId }}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/add-contact.png")}
              style={{ width: 35, height: 35, tintColor: "#183D3D" }}
            />
          ),
          headerShown: false,
          animationEnabled: false,
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        initialParams={{ userId, eventId }}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/analytics.png")}
              style={{ width: 30, height: 30, tintColor: "#183D3D" }}
            />
          ),
          headerShown: false,
          animationEnabled: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation2;
