import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import SignUp from './Screens/SignUp'

export default function App() {
  return (
    <>
      <View style={styles.container}>      
      <SignUp/>
      </View>
    </>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});