import { StyleSheet, Text, View, TextInput } from 'react-native';

const SignUp = () => {
  return (
    <View>
      <TextInput
        style={styles.inputFields}
        placeholder="Email"
      />
      <TextInput
        placeholder="Password"
      />
      <TextInput
        placeholder="Confirm Password"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputFields: {
    margin: 10,
    padding: 5,
    height: 40,
    width: 100,
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 22,
    textAlign: 'center'}
});

export default SignUp;