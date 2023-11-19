import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#183D3D',
    paddingTop: 20,
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
    backgroundColor: '#93B1A6',
    marginRight: 10,
  },
  yetToArrive: {
    width: 20,
    height: 20,
    backgroundColor: '#e8eded',
    marginRight: 10,
  },
  heading: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white'
  }
});

export default styles;