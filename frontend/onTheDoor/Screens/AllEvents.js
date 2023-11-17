import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  Pressable,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import styles from "../Styles/AllEventsStyles";
import { IP } from "@env";

const AllEvents = () => {
  const [ events, setEvents ] = useState([])
  const navigation = useNavigation();
  const route = useRoute()
  const {userId} = route.params;

  const getAllEvents = async () => {
    try {
      const response = await fetch(
        `${IP}/events/get-all-events?userId=${userId}`,
        { method: "GET" }
      )
      if (response.ok) {
        const data = await response.json(); 
        console.log("All events retrieved successfully")
        setEvents(data.events)
      }
    } catch(error) {
      console.log("Error retrieving Events", error)
    }
  };
  
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      if (userId) {
        getAllEvents();
      }
    });

    return unsubscribe;
  }, [userId, navigation]);

  handlePress = (event) => {
    navigation.navigate("TabNavigation2", { eventId: event.eventId, userId })
  }
  
  handleNavigation = () => {
    navigation.navigate("NewEvent", { userId })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.allEvents}>All Events</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={handleNavigation}
          style={styles.button}
          >
          <Text style={styles.buttonText}>CREATE NEW EVENT</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
      {events.map((event) => (
        <Pressable 
        key={event.eventId}
        style={styles.event}
        onPress={() => handlePress(event)}
        >
          <Text>{event.eventName}</Text>
        </Pressable>
      ))}    
      </ScrollView>
    </SafeAreaView>
  )
}

export default AllEvents;