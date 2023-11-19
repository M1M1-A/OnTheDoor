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
    backgroundColor: 'khaki',
    marginRight: 10,
    borderRadius: 5
  },
  yetToArrive: {
    width: 20,
    height: 20,
    backgroundColor: '#fcfbf0',
    marginRight: 10,
    borderRadius: 5
  },
  heading: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: '700',
    color: 'khaki',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
  }
});

export default styles;