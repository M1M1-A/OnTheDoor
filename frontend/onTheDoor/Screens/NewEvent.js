import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import styles from '../Styles/NewEventStyles';
import * as FileSystem from 'expo-file-system';

const NewEvent = () => {  
  const [file, setFile] = useState(null);
  const [eventName, setEventName] = useState("")

  const handleEventInput = (text) => {
    setEventName(text);
  }

  const handleFileUpload = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: 'text/csv',
      });
      console.log("RESULT", result)
      setFile(result);
    } catch (err) {
      console.log('Error', err);
    }
  }

  const handleUpload = async () => {
    if (file) {
      try {
        const response = await fetch('http://192.168.0.12:8080/new-event', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            eventName: eventName,
            file: file
          })
        });
  
        if (response.ok) {
          console.log('Upload successful');
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
        <TouchableOpacity style={styles.button} onPress={handleFileUpload}>
          <Text style={styles.buttonText}>Select CSV File</Text>
        </TouchableOpacity>
        {file && (
          <View>
            <Text style={styles.text}>Selected File: {file.name}</Text>
            <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
              <Text style={styles.buttonText}>Upload</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default NewEvent;
