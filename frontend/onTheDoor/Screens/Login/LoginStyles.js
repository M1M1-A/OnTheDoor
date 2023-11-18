import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#183D3D",
  },
  logo: {
    width: 300,
    height: 80,
    margin: 10
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
    fontWeight: '600'
  },
  signUpText: {
    color: 'white',
    fontWeight: 400,
    fontSize: 18,
    padding: 10
  },
  inputFields: {
    margin: 10,
    padding: 5,
    height: 50,
    width: 300,
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 22,
    textAlign: "center",
    backgroundColor: "#fff",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 5,
    height: 40,
    width: 100,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "dodgerblue",
  },
  buttonText: {
    color: "white",
    fontSize: 22,
  },
  button2: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 5,
    height: 30,
    width: 80,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "cornflowerblue",
  },
  button2Text: {
    color: "white",
    fontSize: 18,
  },
});

export default styles;
