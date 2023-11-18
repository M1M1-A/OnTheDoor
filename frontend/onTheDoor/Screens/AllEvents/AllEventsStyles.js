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
    backgroundColor: "#183D3D",
  },
  searchBar: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    textAlign: "center",
  },
  event: {
    width: 400,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 0.5,
    borderRadius: 6,
  },
  eventName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#183D3D",
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
