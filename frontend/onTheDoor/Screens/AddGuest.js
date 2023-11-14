import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  View
} from "react-native";
import { useRoute, useNavigation  } from "@react-navigation/native";
import { IP } from "@env";
import styles from "../Styles/AddGuestStyles"

const AddGuest = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [pricePaid, setPricePaid] = useState('')

  const navigation = useNavigation();
  const route = useRoute();
  const {event, userId} = route.params

  const handleFirstNameInput = (text) => {
    setFirstName(text);
  } 

  const handleLastNameInput = (text) => {
    setLastName(text);
  } 

  const handleEmailInput = (text) => {
    setEmail(text);
  } 

  const handlePricePaidInput = (text) => {
    setPricePaid(text);
  } 

  const handleAddGuest = async () => {
    try {
      const response = await fetch(`${IP}/guests/add-guest`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          pricePaid,
          eventId: event._id,
        }),
      })
      
      if (response.ok) {
        console.log("Guest added and checked in")
        navigation.navigate("Guestlist", {eventId: event._id, userId})
      }

    } catch(error) {
      console.log("Error adding Guest", error)
    }
  }


  const handleNavigateToGuestlist = () => {
    navigation.navigate("Guestlist", { eventName: event.eventName, userId, eventId: event.eventId })
  }

  const handleNavigateToDashboard = () => {
    navigation.navigate("Dashboard", { event })
  }

  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.buttonContainer}>
        <View>
          <TouchableOpacity 
            style={styles.button2}
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
            style={styles.button2}
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

}

export default AddGuest;