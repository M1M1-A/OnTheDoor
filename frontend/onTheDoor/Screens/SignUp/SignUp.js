import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./SignUpStyles";
import { IP } from "@env";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const handleEmailInput = (text) => {
    setEmail(text);
  };

  const handlePasswordInput = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordInput = (text) => {
    setConfirmPassword(text);
  };

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    fetch(`${IP}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    }).then((response) => {
      if (response.status === 201) {
        console.log("Sign up successful");
        navigation.navigate("LogIn");
      } else if (response.status !== 201) {
        response.json().then((data) => {
          alert(data.message);
        });
      } else {
        console.log("Sign up failed");
      }
    });
  };

  const handlePress = () => {
    navigation.navigate("LogIn");
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>SIGN UP</Text>
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
        <TextInput
          style={styles.inputFields}
          placeholder="Confirm Password"
          onChangeText={handleConfirmPasswordInput}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Submit button"
        >
          <Text style={styles.buttonText} onPress={handleSubmit}>
            SUBMIT
          </Text>
        </TouchableOpacity>
        <Text>Already with us? Log in instead</Text>
        <TouchableOpacity
          style={styles.button2}
          accessibilityLabel="Submit button"
          onPress={handlePress}
        >
          <Text style={styles.button2Text}>LOG IN</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
