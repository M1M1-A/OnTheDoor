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
    height: 50,
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
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: "dodgerblue",
  },
  uploadButton: {
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
    fontSize: 20,
    textAlign: "center",
  },
  uploadContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
  },
});

export default styles;
