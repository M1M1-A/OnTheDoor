import React, { useState } from "react";
import { Text, SafeAreaView, View, Button, TouchableOpacity, Image } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "./CheckInStyles";
import { IP } from "@env";
import checkTokenExpiry from "../../CheckTokenExpiry";

const CheckIn = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { guest, userId, eventId } = route.params;
  const [checkedIn, setCheckedIn] = useState(guest.arrived);
  const guestId = guest._id;

  const handleCheckIn = async () => {
    const tokenExpired = await checkTokenExpiry();

    if (!tokenExpired) {
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
    } else {
      alert("Session expired. Please log in again")
      navigation.navigate("LogIn")      
    }  
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Guest Details</Text>
      <View style={styles.guestDetails}>
        <Text style={styles.text}>
          name//  {guest.firstName} {guest.lastName}
        </Text>
        <Text style={styles.text}>email//   {guest.email}</Text>
        <Text style={styles.text}>paid//    {guest.paidStatus}</Text>
      </View>
      {checkedIn ? (
        <Text style={styles.checkedIn}>Checked In </Text>
      ) : (
        <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Submit button"
        onPress={handleCheckIn}
      >
        <Text style={styles.buttonText}>CHECK IN</Text>
      </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default CheckIn;
