import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  Pressable,
  View,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import styles from "../Styles/AllEventsStyles";
import { IP } from "@env";


const AllEvents = () => {
  const [ events, setEvents ] = useState([])
  const navigation = useNavigation();
  const route = useRoute()
  const {userId} = route.params

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const response = await fetch(
          `${IP}/events/get-all-events?userId=${userId}`,
          { method: "GET" }
        )
        if (response.ok) {
          const data = await response.json(); 
          console.log("Events retrieved successfully")
          setEvents(data.events)
        }
      } catch(error) {
        console.log("Error retrieving Events", error)
      }
    }
    getAllEvents()
  }, [])

  handlePress = (event) => {
    navigation.navigate("Guestlist", { eventId: event.eventId, userId, eventName: event.eventName  })
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.allEvents}>All Events</Text>
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