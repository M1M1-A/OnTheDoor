import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#183D3D",
    // fontFamily: 'BebasNeue-Regular'
  },
  logo: {
    width: 300,
    height: 80,
    margin: 10
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
    color: 'khaki',
    fontWeight: 'bold'
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
    backgroundColor: "khaki",
  },
  buttonText: {
    color: "#183D3D",
    fontSize: 20,
    fontWeight: '600'
  },
  button2: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 5,
    height: 40,
    width: 100,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#fcfbf0",
  },
  button2Text: {
    color: "#183D3D",
    fontSize: 18,
    fontWeight: '600'
  },
});

export default styles;
