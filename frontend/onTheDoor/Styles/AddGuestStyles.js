import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "mediumspringgreen",
  },
  inputFields: {
    margin: 10,
    padding: 5,
    height: 35,
    width: 200,
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 22,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 5,
    height: 30,
    width: 150,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: 'cornflowerblue',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  }
});

export default styles;
