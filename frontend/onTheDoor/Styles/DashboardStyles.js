import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  pieChart: {
    marginTop: 10,
    marginBottom: 10,
  },
  labelsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  arrived: {
    width: 20,
    height: 20,
    backgroundColor: '#fbd203',
    marginRight: 10,
  },
  yetToArrive: {
    width: 20,
    height: 20,
    backgroundColor: '#ff9100',
    marginRight: 10,
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default styles;