import React, { useState } from "react";
import { Text, SafeAreaView, View, Button, TouchableOpacity, Image } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "../Styles/CheckInStyles";
import { IP } from "@env";

const CheckIn = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { guest, event, userId } = route.params;
  const [checkedIn, setCheckedIn] = useState(guest.arrived);
  const guestId = guest._id;
  const eventId = event._id

  const handleCheckIn = async () => {
    try {
      const response = await fetch(`${IP}/guests/check-in`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ guestId, eventId }),
      });
      if (response.ok) {
        console.log("Guest Checked In ok");
        setCheckedIn(true);
      } else {
        console.log("error checking in guest");
      }
    } catch (error) {
      console.log("Error checking in guest", error);
    }
  };

  const handleNavigateToGuestlist = () => {
    navigation.navigate("Guestlist", { eventName: event.eventName, userId, eventId})
  }

  const handleNavigateToDashboard = () => {
    navigation.navigate("Dashboard", { event })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Guest Details</Text>
      <Text>
        Name: {guest.firstName} {guest.lastName}
      </Text>
      <Text>Email: {guest.email}</Text>
      <Text>Paid: {guest.paidStatus}</Text>
      {checkedIn ? (
        <Text>Checked In</Text>
      ) : (
        <Button title="CHECK IN" onPress={handleCheckIn} />
      )}
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

export default CheckIn;
