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
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import styles from "../Styles/GuestlistStyles";
import { IP } from "@env";


const AllEvents = () => {
  const [ events, setEvents ] = useState({})
  const route = useRoute()
  const {userId} = route.params

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const events = await fetch(
          `${IP}/get-all-events?userId=${userId}`,
          {
            method: "GET"
          }
        )
        if (events) {
          console.log("Events retrieved successfully")
          setEvents(events)
        }
      } catch(error) {
        console.log("Error retrieving Events", error)
      }
    }
    getAllEvents()
  }, [])
  
  return (
    <SafeAreaView>
      <Text>All Events</Text>
      <Text>EventName</Text>
    </SafeAreaView>
  )

}

export default AllEvents;