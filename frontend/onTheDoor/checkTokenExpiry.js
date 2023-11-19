import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const checkIfTokenExpired= async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token); 
      const currentTime = Math.floor(Date.now() / 1000);

      return decodedToken.exp < currentTime; // Return true if the token is expired
    } else {
      return false; // Return false if the token is not expired
    }
  } catch (error) {
    console.error("Error checking token expiration:", error);
    return false; // Return false in case of an error
  }
};

export default checkIfTokenExpired;

