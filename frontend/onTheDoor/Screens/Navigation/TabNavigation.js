import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity, Text } from "react-native";
import AllEvents from "../AllEvents/AllEvents";
import NewEvent from "../NewEvent/NewEvent";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

const Logout =  () => {
  const navigation = useNavigation();

  useEffect(() => {
    const handlePress = async () => {
      console.log("Logging out...");
      await AsyncStorage.removeItem('token');
      navigation.navigate("LogIn");
    };

    handlePress(); 
  }, []); 

  return null;
};

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
          tabBarIcon: () => (
            <Image
              source={require("../../assets/clipboards.png")}
              style={{ width: 30, height: 30, tintColor: "#183D3D" }}
            />
          ),
          headerShown: false,
          animationEnabled: false,
        }}
      />
      <Tab.Screen
        name="New Event"
        component={NewEvent}
        initialParams={{ userId: userId }}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/folder.png")}
              style={{ width: 29, height: 29, tintColor: "#183D3D" }}
            />
          ),
          headerShown: false,
          animationEnabled: false,
        }}
      />
      <Tab.Screen
        name="Logout"
        component={Logout}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/logout.png")}
              style={{ width: 25, height: 25, tintColor: "#183D3D" }}
            />
          ),
          headerShown: false,
          animationEnabled: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
