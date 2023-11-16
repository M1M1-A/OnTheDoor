import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  eventName: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
  guestlist: {
    marginBottom: 40,
    textAlign: "center",
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
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
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "mediumspringgreen",
  },
  guest: {
    width: 400,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 0.5,
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    width: 200,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 15,
  }
});

export default styles;
