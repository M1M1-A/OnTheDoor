import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, TextInput, Pressable, View, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation} from '@react-navigation/native'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import styles from '../Styles/GuestlistStyles'

const Guestlist = () => {
  const [userId, setUserId] = useState("");
  const [event, setEvent] = useState({});
  const navigation = useNavigation(); 
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
  
  const renderAttendees = () => {
    const attendees = event.attendees;
    if (attendees && attendees.length > 0) {
      return attendees.map((attendee) => (
        <Pressable
          key={attendee._id}
          style={styles.attendee}
          onPress={() => handlePress(attendee)} 
        >
          <Text>{`${attendee.firstName} ${attendee.lastName}`}</Text>
        </Pressable>
      ));
    } else {
      return <Text>No guests found.</Text>; 
    }
  };
  

  const handlePress = (attendee) => {
    navigation.navigate('CheckIn', { attendee })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.eventName}>{eventName}</Text>
      <Text style={styles.guestlist}>Guestlist</Text>
      <ScrollView>
        <View >{event && renderAttendees()}</View>
      </ScrollView>
    </SafeAreaView>
  )
};

export default Guestlist;