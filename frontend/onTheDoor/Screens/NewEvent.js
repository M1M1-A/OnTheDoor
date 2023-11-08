import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, TextInput, Pressable, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import styles from '../Styles/NewEventStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native'; 
const FormData = require('form-data');

const NewEvent = () => {  
  const [file, setFile] = useState(null);
  const [eventName, setEventName] = useState("")
  // const [userId, setUserId] = useState(null);
  const navigation = useNavigation(); 
  const route = useRoute();

  // useEffect(() => {
  //   const getUserId = async () => {
  //     try {
  //       const id = await AsyncStorage.getItem('userId');
  //       setUserId(id);
  //     } catch (error) {
  //       console.error('Error retrieving user ID from AsyncStorage:', error);
  //     }
  //   };
  //   getUserId();
  // }, []);
  const { userId } = route.params

  const handleEventInput = (text) => {
    setEventName(text);
  }

  const handleFileSelection = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: 'text/csv',
      });
      const file = result.assets[0]
      setFile(file);
    } catch (err) {
      console.log('Error', err);
    }
  }

  const handleFileUpload = async () => {
    if (file) {
      try {
        const formData = new FormData();

        const fileToUpload = {
          name: file.name.split(".")[0],
          uri: file.uri,
          type: file.mimeType,
          size: file.size,
        };

        formData.append('file', fileToUpload);
        formData.append('eventName', eventName);
        formData.append('userId', userId);
  
        const response = await fetch('http://192.168.0.12:8080/new-event', {
          method: 'POST',
          body: formData,
          headers: {
            Accept: "application/json",
            'Content-Type': 'multipart/form-data',
          },
        });
  
        if (response.ok) {
          console.log('Upload successful');
          navigation.navigate('Guestlist', {eventName, userId})
        } else {
          console.log('Upload failed');
          console.log("Response", response.status)
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.log('No file selected');
    }
  };
    

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Name of event</Text>
      <TextInput 
            placeholder='Event Name' 
            style={styles.inputFields}
            onChangeText={handleEventInput}
      />
      <View style={styles.uploadContainer}>
        <Text style={styles.text}>Upload CSV file</Text>
        <Pressable style={styles.button} onPress={handleFileSelection}>
          <Text style={styles.buttonText}>Select CSV File</Text>
        </Pressable>
        {file && (
          <View>
            <Text style={styles.text}>Selected File: {file.name}</Text>
            <Pressable style={styles.uploadButton} onPress={handleFileUpload}>
              <Text style={styles.buttonText}>Upload</Text>
            </Pressable>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default NewEvent;
