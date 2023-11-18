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
    height: 180,
    width: 180,
    borderRadius: 100,
    backgroundColor: "white",
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
    backgroundColor: "white",
  },
  buttonText: {
    color: "#183D3D",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
  },
  uploadContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 22,
    color: "white",
    fontWeight: "600",
  },
});

export default styles;
