import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  allEvents: {
    marginTop: 30,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "mediumspringgreen",
  },
  event: {
    width: 400,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 0.5,
    borderRadius: 6,
  },
  buttonContainer: {
    alignSelf: "flex-end",
    marginRight: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 5,
    height: 40,
    width: 100,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "dodgerblue",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
});

export default styles;
