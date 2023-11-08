import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  View,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../Styles/GuestlistStyles";

const Guestlist = () => {
  // const [userId, setUserId] = useState("");
  const [event, setEvent] = useState({});
  const navigation = useNavigation();
  const route = useRoute();
  const { eventName, userId } = route.params;

  useEffect(() => {
    // const getUserId = async () => {
    //   try {
    //     const id = await AsyncStorage.getItem('userId');
    //     setUserId(id);
    //   } catch (error) {
    //     console.error('Error retrieving user ID from AsyncStorage:', error);
    //   }
    // };
    // getUserId();

    const getEvent = async () => {
      try {
        const response = await fetch(
          `http://192.168.0.12:8080/get-event?userId=${userId}&eventName=${eventName}`,
          {
            method: "GET",
          }
        );
        if (response.ok) {
          console.log("Event retrieved successfully");
          const data = await response.json();
          const eventFound = data.event;
          setEvent(eventFound);
        } else {
          console.log("No event retrieved");
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (userId) {
      getEvent();
    }
  }, [userId]);

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
    navigation.navigate("CheckIn", { guest: guest, eventId: event._id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.eventName}>{eventName}</Text>
      <Text style={styles.guestlist}>Guestlist</Text>
      <ScrollView>
        <View>{event && renderGuests()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Guestlist;
