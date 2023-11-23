import React, { useState } from "react";
import { Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { IP } from "@env";
import styles from "./AddGuestStyles"; 

const AddGuest = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pricePaid, setPricePaid] = useState("");

  const navigation = useNavigation();
  const route = useRoute();
  const { userId, eventId } = route.params;

  const handleFirstNameInput = (text) => {
    setFirstName(text);
  };

  const handleLastNameInput = (text) => {
    setLastName(text);
  };

  const handleEmailInput = (text) => {
    setEmail(text);
  };

  const handlePricePaidInput = (text) => {
    setPricePaid(text);
  };

  const handleAddGuest = async () => {
    try {
      const response = await fetch(`${IP}/guests/add-guest`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          pricePaid,
          eventId,
        }),
      });

      if (response.ok) {
        console.log("Guest added and checked in");
        navigation.navigate("Guestlist", { eventId, userId });
      }
    } catch (error) {
      console.log("Error adding Guest", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>ADD GUEST</Text>
      <TextInput
        style={styles.inputFields}
        placeholder="First Name"
        onChangeText={handleFirstNameInput}
      />
      <TextInput
        style={styles.inputFields}
        placeholder="Last Name"
        onChangeText={handleLastNameInput}
      />
      <TextInput
        style={styles.inputFields}
        placeholder="Email"
        onChangeText={handleEmailInput}
      />
      <TextInput
        style={styles.inputFields}
        placeholder="Amount Paid"
        onChangeText={handlePricePaidInput}
      />
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Submit button"
        onPress={handleAddGuest}
      >
        <Text style={styles.buttonText}>ADD GUEST</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddGuest;
