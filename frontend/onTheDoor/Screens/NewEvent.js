import React from 'react';
import { Text, SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../Styles/NewEventStyles';

const NewEvent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Name of event</Text>
      <TextInput placeholder='Event Name' style={styles.inputFields} />
      <View style={styles.uploadContainer}>
        <Text style={styles.text}>Upload CSV file</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Select CSV File</Text>
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