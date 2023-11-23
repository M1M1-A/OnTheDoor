import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const checkTokenExpiry = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token); 
      const currentTime = Math.floor(Date.now() / 1000);

      const isExpired = decodedToken.exp < currentTime;
      return isExpired// Return true if the token is expired, false if not
    } 
  } catch (error) {
    console.error("Error checking token expiration:", error);
    return false;
  }
};

export default checkTokenExpiry;