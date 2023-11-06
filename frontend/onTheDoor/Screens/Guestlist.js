import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, TextInput, Pressable, View } from 'react-native';
import styles from '../Styles/NewEventStyles';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const Guestlist = () => {
  const [userId, setUserId] = useState("");
  const [event, setEvent] = useState({});
  const route = useRoute();
  const eventName = route.params.eventName;

  useEffect(() => {
    const getUserId = async () => {
      try {
        const id = await AsyncStorage.getItem('userId');
        setUserId(id);
      } catch (error) {
        console.error('Error retrieving user ID from AsyncStorage:', error);
      }
    };
    getUserId();
  
    const getEvent = async () => {
      try {
        const response = await fetch(`http://192.168.0.12:8080/get-event?userId=${userId}&eventName=${eventName}`, {
          method: 'GET',
        });
        if (response.ok) {
          console.log("Event retrieved successfully");
          const data = await response.json(); 
          const eventFound = data.event; 
          setEvent(eventFound);
        } else {
          console.log("No event retrieved");
        }
      } catch(error) {
        console.log(error);
      }
    };
  
    if (userId) {
      getEvent();
    }
  }, [userId]); 
  

  console.log("Event", event)
  // use extracted info to populate guestlist in JSX template

  return (
    <SafeAreaView style={styles.container}>
      <Text>Guestlist</Text>
    </SafeAreaView>
  )
};

export default Guestlist;