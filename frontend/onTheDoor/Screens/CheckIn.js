import React from 'react';
import { Text, SafeAreaView, TextInput, Pressable, View, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation} from '@react-navigation/native'; 
import styles from '../Styles/CheckInStyles'

const CheckIn = () =>{
  const route = useRoute();
  const { attendee } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>Attendee Details</Text>
      <Text>First Name: {attendee.firstName}</Text>
      <Text>Last Name: {attendee.lastName}</Text>
      <Text>Email: {attendee.email}</Text>
      <Text>Paid: {attendee.paidStatus}</Text>
    </SafeAreaView>
  );
}

export default CheckIn;