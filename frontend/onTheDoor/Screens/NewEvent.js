import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../Styles/NewEventStyles';
import DocumentPicker from 'react-native-document-picker';

const NewEvent = () => {  
  const [file, setFile] = useState()

  const handleFileUpload = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.csv]
      });
      setFile(res);

    } catch(err) {
      if (DocumentPicker.pick.isCancel(err)) {
        console.log("User cancelled the picker")
      }
    }
  }

  console.log("FILE", file)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Name of event</Text>
      <TextInput placeholder='Event Name' style={styles.inputFields} />
      <View style={styles.uploadContainer}>
        <Text style={styles.text}>Upload CSV file</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleFileUpload}>Select CSV File</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>Selected File: </Text>
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewEvent;