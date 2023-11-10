import React, { useState } from "react";
import { Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../Styles/SignUpStyles";
import { IP } from "@env";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();
  console.log(IP)

  const handleEmailInput = (text) => {
    setEmail(text);
  };

  const handlePasswordInput = (text) => {
    setPassword(text);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch(`${IP}/tokens`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    if (response.status !== 201) {
      console.log("Log in unsuccessful");
      let data = await response.json();
      setError(data.message);
    } else {
      console.log("Log in successful");
      let data = await response.json();
      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem("userId", data.userId);
      navigation.navigate("NewEvent", { userId: data.userId });
    }
  };

  const handlePress = () => {
    navigation.navigate("SignUp");
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
        secureTextEntry={true}
      />
      {error && (
        <>
          <Text>{error}</Text>
        </>
      )}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Submit button"
      >
        <Text style={styles.buttonText} onPress={handleSubmit}>
          SUBMIT
        </Text>
      </TouchableOpacity>
      <Text>Not yet with us? Sign Up instead</Text>
      <TouchableOpacity
        style={styles.button2}
        accessibilityLabel="Submit button"
        onPress={handlePress}
      >
        <Text style={styles.button2Text}>SIGN UP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LogIn;
