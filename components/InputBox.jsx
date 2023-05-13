import { View, Text, TextInput, StyleSheet } from "react-native";

export default InputBox = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <TextInput
          placeholder="Type here!"
          onChangeText={(newText) => {
            props.setText(newText);
          }}
        />
      </View>
      <View>
        <Text>Hola</Text>
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
  // container: {
  //     flex: 3,
  //     flexDirection: "row"
  // }
});
