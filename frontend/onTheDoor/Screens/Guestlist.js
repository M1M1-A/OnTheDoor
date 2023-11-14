import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  Image
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "../Styles/GuestlistStyles";
import { IP } from "@env";

const Guestlist = () => {
  const [event, setEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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

    if (event && event.guests) {
      const searchResults = event.guests.filter((guest) =>
        `${guest.firstName} ${guest.lastName}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );

      setSearchResults(searchResults);
    }

    return unsubscribe;
  }, [navigation, userId, eventName, searchTerm, event]);

  const renderGuests = () => {
    const guestsToRender =
      searchResults.length > 0 ? searchResults : event.guests;

    if (guestsToRender && guestsToRender.length > 0) {
      return guestsToRender.map((guest) => (
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
    navigation.navigate("CheckIn", { guest, event, userId });
  };

  const handleAddGuest = () => {
    navigation.navigate("AddGuest", { userId, event });
  };

  const handleNavigateToGuestlist = () => {
    navigation.navigate("Guestlist", { eventName, userId, eventId })
  }

  const handleNavigateToDashboard = () => {
    navigation.navigate("Dashboard", { event })
  }

  console.log("Event ID", eventId)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.eventName}>{eventName}</Text>
      <Text style={styles.guestlist}>Guestlist</Text>
      <Button title="+" onPress={handleAddGuest} />
      <TextInput
        style={styles.searchBar}
        placeholder="Search by name"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <ScrollView>
        <View>{event && renderGuests()}</View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <View>
          <TouchableOpacity 
            style={styles.button}
            onPress={handleNavigateToGuestlist}
          >
            <Image
              style={styles.image}
              source={require('../assets/analytics.png')}
            />
            <Text>GUESTLIST</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleNavigateToDashboard}
          >
            <Image
              style={styles.image}
              source={require('../assets/contact-list.png')}
            />
            <Text>DASHBOARD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Guestlist;
