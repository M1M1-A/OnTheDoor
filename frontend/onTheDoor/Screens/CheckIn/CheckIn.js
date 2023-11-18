import React, { useState } from "react";
import { Text, SafeAreaView, View, Button, TouchableOpacity, Image } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "./CheckInStyles";
import { IP } from "@env";

const CheckIn = () => {
  const route = useRoute();
  const { guest, userId, eventId } = route.params;
  const [checkedIn, setCheckedIn] = useState(guest.arrived);
  const guestId = guest._id;

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

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Guest Details</Text>
      <Text style={styles.text}>
        Name: {guest.firstName} {guest.lastName}
      </Text>
      <Text style={styles.text}>Email: {guest.email}</Text>
      <Text style={styles.text}>Paid: {guest.paidStatus}</Text>
      {checkedIn ? (
        <Text style={styles.text}>Checked In</Text>
      ) : (
        <Button title="CHECK IN" onPress={handleCheckIn} />
      )}
    </SafeAreaView>
  );
};

export default CheckIn;
