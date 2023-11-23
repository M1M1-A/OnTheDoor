import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#183D3D",
  },
  heading: {
    textAlign: "center",
    fontSize: 32,
    color: "khaki",
    fontWeight: "bold",
    marginBottom: 20
  },
  inputFields: {
    margin: 10,
    padding: 5,
    height: 50,
    width: 260,
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 18,
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
    margin: 20,
    padding: 5,
    height: 40,
    width: 100,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "khaki",
  },
  buttonText: {
    color: "#183D3D",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
  },
  uploadCsvText: {
    textAlign: "center",
    fontSize: 22,
    color: "khaki",
    fontWeight: "600",
    marginTop: 40,
  },
  uploadContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },
  text: {
    textAlign: "center",
    fontSize: 22,
    color: "white",
    fontWeight: "600",
    marginBottom: 20
  },
  fileUploadContainer: {
    alignItems: 'center'
  },
  fileName: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "600",
    // margin: 10
  }
});

export default styles;
