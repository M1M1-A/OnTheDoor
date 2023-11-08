import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  eventName: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold'
  },
  guestlist: {
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'mediumspringgreen',
  },
  attendee: {
    width: 400,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 6,
  }
});

export default styles;