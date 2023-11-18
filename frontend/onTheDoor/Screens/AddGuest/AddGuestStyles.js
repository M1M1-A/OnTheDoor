import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#183D3D",
  },
  inputFields: {
    margin: 10,
    padding: 5,
    height: 35,
    width: 200,
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
    height: 30,
    width: 150,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "cornflowerblue",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "white",
  },
  button2: {
    alignItems: "center",
    width: 200,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 15,
  },
});

export default styles;
