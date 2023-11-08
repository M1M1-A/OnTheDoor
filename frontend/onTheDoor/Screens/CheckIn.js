import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  Button,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "../Styles/CheckInStyles";

const CheckIn = () => {
  const [ checkedIn, setCheckedIn ] = useState(false)
  const route = useRoute();
  const { guest, eventId } = route.params;
  // const arrived = guest.arrived
  const guestId = guest._id

  // might need to add useEffect to fetch the guest again
  // with updated info on arrival status. 

  const handleCheckIn = async () => {
    try {
      const response = await fetch(
        `http://192.168.0.12:8080/check-in`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ guestId, eventId })
        }
      );
      if (response.ok) {
        console.log("Guest Checked In ok");
        setCheckedIn(true);
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
      {checkedIn ? (
        <Text>Checked In</Text>
      ) : (
        <Button title="CHECK IN" onPress={handleCheckIn} />
      )}
    </SafeAreaView>
  );
};

export default CheckIn;
