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
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 5,
    height: 40,
    width: 200,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "khaki",
    marginTop: 20
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600'
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 15,
  },
  heading: {
    fontSize: 30,
    marginBottom: 20,
    color: 'khaki',
    fontWeight: 'bold'
  },
  guestDetails: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
    margin: 10,
    fontSize: 22
  },
  checkedIn: {
    fontSize: 25,
    fontWeight: '600',
    color: 'khaki'
  }
});

export default styles;
