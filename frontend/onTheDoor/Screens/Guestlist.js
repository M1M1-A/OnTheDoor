import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  View,
  ScrollView,
  Button,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "../Styles/GuestlistStyles";
import { IP } from "@env";

const Guestlist = () => {
  const [event, setEvent] = useState({});
  const navigation = useNavigation();
  const route = useRoute();
  const { eventName, userId, eventId } = route.params;

  const getEvent = async () => {
    try {
      const response = await fetch(
        `${IP}/events/get-event?userId=${userId}&eventId=${eventId}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        console.log("Event retrieved successfully");
        const data = await response.json();
        setEvent(data.event);
      } else {
        console.log("No event retrieved");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      if (userId) {
        getEvent();
      }
    });

    return unsubscribe;
  }, [navigation, userId, eventName]);
  

  const renderGuests = () => {
    const guests = event.guests;
    if (guests && guests.length > 0) {
      return guests.map((guest) => (
        <Pressable
          key={guest._id}
          style={styles.guest}
          onPress={() => handlePress(guest)}
        >
          <Text>{`${guest.firstName} ${guest.lastName}`}</Text>
        </Pressable>
      ));
    } else {
      return <Text>No guests found.</Text>;
    }
  };

  const handlePress = (guest) => {
    navigation.navigate("CheckIn", { guest, eventId });
  };

  const handleAddGuest = () => {
    navigation.navigate("AddGuest", {eventId, userId, eventName})
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.eventName}>{eventName}</Text>
      <Text style={styles.guestlist}>Guestlist</Text>
      <Button 
        title="+"
        onPress={handleAddGuest}
      />
      <ScrollView>
        <View>{event && renderGuests()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Guestlist;
