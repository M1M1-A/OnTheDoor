import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#183D3D",
  },
  heading: {
    fontSize: 30,
    marginBottom: 20,
    color: 'khaki',
    fontWeight: 'bold'
  },
  inputFields: {
    margin: 10,
    padding: 5,
    height: 50,
    width: 260,
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
