import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  Pressable,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import styles from "./AllEventsStyles";
import { IP } from "@env";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [ searchTerm, setSearchTerm] = useState('')
  const navigation = useNavigation();
  const route = useRoute();
  const { userId } = route.params;

  const getAllEvents = async () => {
    try {
      const response = await fetch(
        `${IP}/events/get-all-events?userId=${userId}`,
        { method: "GET" }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("All events retrieved successfully");
        setEvents(data.events);
      }
    } catch (error) {
      console.log("Error retrieving Events", error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      if (userId) {
        getAllEvents();
      }
    });

    if (events && searchTerm) {
      const searchResults = events.filter((event) =>
        event.eventName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEvents(searchResults);
    } 

    return unsubscribe;
  }, [userId, navigation, searchTerm]);
  
  const eventsToRender = searchTerm.length > 0 ? filteredEvents : events;

  handlePress = (event) => {
    navigation.navigate("TabNavigation2", { eventId: event.eventId, userId });
  };

  handleNavigation = () => {
    navigation.navigate("NewEvent", { userId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.allEvents}>All Events</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search events by name..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <ScrollView>
        { eventsToRender.map((event) => (
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
  );
};

export default AllEvents;
