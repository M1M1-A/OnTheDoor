import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  allEvents: {
    marginTop: 30,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 40,
    color: "khaki",
    fontWeight: "bold",
  },
  logo: {
    width: 200,
    height: 50,
    margin: 10,
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
    width: 390,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 0.5,
    borderRadius: 5,
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
