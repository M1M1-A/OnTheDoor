import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "./GuestlistStyles";
import { IP } from "@env";
import checkTokenExpiry from "../../CheckTokenExpiry";

const Guestlist = () => {
  const [event, setEvent] = useState(null);
  const [eventName, setEventName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const { userId, eventId } = route.params;

  const getEvent = async () => {
    try {
      const response = await fetch(
        `${IP}/events/get-event?userId=${userId}&eventId=${eventId}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        console.log("Guestlist event retrieved successfully");
        const data = await response.json();
        setEvent(data.event);
        setEventName(data.event.eventName);
      } else {
        console.log("No event retrieved");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      const tokenExpired = await checkTokenExpiry()

      if (!tokenExpired) {
        await getEvent()
      } 
      else {
        alert("Session expired. Please log in again")
        navigation.navigate("LogIn")      
      }
    }

    checkToken();

    const unsubscribe = navigation.addListener("focus", checkToken);

    if (event && event.guests) {
      const searchResults = event.guests.filter((guest) =>
        `${guest.firstName} ${guest.lastName}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );

      setSearchResults(searchResults);
    }

    return unsubscribe;
  }, [navigation, userId, searchTerm]);

  const renderGuests = () => {
    const guestsToRender =
      searchTerm.length > 0 ? searchResults : event.guests;

    if (guestsToRender && guestsToRender.length > 0) {
      return guestsToRender.map((guest) => (
        <Pressable
          key={guest._id}
          style={styles.guest}
          onPress={() => handlePress(guest)}
        >
          <Text style={styles.guestName}>{`${guest.firstName} ${guest.lastName}`}</Text>
        </Pressable>
      ));
    } else {
      return <Text>No guests found.</Text>;
    }
  };

  const handlePress = (guest) => {
    navigation.navigate("CheckIn", { guest, userId, eventId });
  };

  const backToAllEvents = () => {
    navigation.navigate("TabNavigation", { userId, eventId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.eventName}>{eventName}</Text>
      <Text style={styles.guestlist}>Guestlist</Text>
      <TouchableOpacity
        onPress={backToAllEvents}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>👈 All Events</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by guest name"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <ScrollView>
        <View>{event && renderGuests()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Guestlist;
