import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#183D3D",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "white",
  },
  button: {
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
  heading: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },
});

export default styles;
