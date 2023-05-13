import { View, Text, TextInput, StyleSheet } from "react-native";

export default InputBox = (props) => {
  return (
    <View >
      <View style={styles.container}>
        <Text>{props.title}</Text>
        <TextInput
          placeholder="Type here!"
          onChangeText={(newValue) => {
            props.setValue(newValue);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
      justifyContent: "space-around",
      padding: 10,
  }
});
