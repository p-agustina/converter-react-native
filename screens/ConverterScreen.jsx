import { View, StyleSheet, Text} from "react-native";
import { useState } from "react";
import InputBox from "../components/InputBox";
import DropdownMenu from "../components/DropdownMenu";

export default ConverterScreen = () => {
  const [text, setText] = useState("");
  const [selected, setSelected] = useState("");


  return (
    <View style={styles.layout}>
    <Text>Selected: {selected}</Text>
      <DropdownMenu setSelected={setSelected}/>
      <View>
        <InputBox title={selected} setText={setText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  }
});
