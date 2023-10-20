import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import styles from '../Styles/NewEventStyles';

const NewEvent = () => {  
  const [file, setFile] = useState(null);

  const handleFileUpload = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: 'text/csv',
      });
      setFile({
        name: result.assets[0].name,
        uri: result.assets[0].uri
      });
    } catch (err) {
      console.log('Error', err);
    }
  }

  console.log("FILE", file)

  const handleUpload = () => {
    if (file) {
      // Handle file upload logic here
      console.log('Uploading file:', file.uri);
      // Call your backend API here for uploading the file
    } else {
      console.log('No file selected');
    }
  };

  console.log('FILE', file);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Name of event</Text>
      <TextInput placeholder='Event Name' style={styles.inputFields} />
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
