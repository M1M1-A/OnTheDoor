import React from "react";
import {
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  View,
  ScrollView,
  Button,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import styles from "../Styles/CheckInStyles";

const CheckIn = () => {
  const route = useRoute();
  const { guest } = route.params;
  // const arrived = guest.arrived
  const guestId = guest._id
  console.log("Guest Id", guestId)

  const handleCheckIn = async () => {
    try {
      const response = await fetch(
        `http://192.168.0.12:8080/check-in`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ guestId: guestId })
        }
      );
      if (response.ok) {
        console.log("Guest Checked In ok")
      } else {
        console.log("error checking in guest")
      }
    } catch(error) {
      console.log("Error checking in guest", error)
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Guest Details</Text>
      <Text>
        Name: {guest.firstName} {guest.lastName}
      </Text>
      <Text>Email: {guest.email}</Text>
      <Text>Paid: {guest.paidStatus}</Text>
      {/* { !arrived && (
        <Button title="CHECK IN" />
      )} */}
      <Button 
      title="CHECK IN"
      onPress={handleCheckIn} />
    </SafeAreaView>
  );
};

export default CheckIn;
