import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation} from '@react-navigation/native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../Styles/SignUpStyles';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const navigation = useNavigation(); 

  const handleEmailInput = (text) => {
    setEmail(text);
  };

  const handlePasswordInput = (text) => {
    setPassword(text);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    let response = await fetch("http://192.168.0.12:8080/tokens", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    if (response.status !== 201) {
      console.log("Log in unsuccessful");
      let data = await response.json();
      // console.log("Error message:", data.message);
      setError(data.message)
      //useState to setError message. Then use this to show error on page
    } else {
      console.log("Log in successful");
      let data = await response.json();
      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem("userId", data.userId);
      navigation.navigate('NewEvent')
    }
  }

  const handlePress = () => {
    navigation.navigate('SignUp'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>LOG IN</Text>
      <TextInput 
        style={styles.inputFields} 
        placeholder="Email"
        onChangeText={handleEmailInput}
        />
      <TextInput 
        style={styles.inputFields} 
        placeholder="Password" 
        onChangeText={handlePasswordInput}  
        />
      {error && (
        (<><Text>{error}</Text></>)
      )}
      <TouchableOpacity 
        style={styles.button} 
        accessibilityLabel="Submit button"
      >
        <Text style={styles.buttonText} onPress={handleSubmit}>SUBMIT</Text>
      </TouchableOpacity>
      <Text>Not yet with us? Sign Up instead</Text>
      <TouchableOpacity 
        style={styles.button2} 
        accessibilityLabel="Submit button" onPress={handlePress}
      >
        <Text style={styles.button2Text}>SIGN UP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LogIn;
