import { View, StyleSheet, Text} from "react-native";
import { useState, useEffect } from "react";
import InputBox from "../components/InputBox";
import DropdownMenu from "../components/DropdownMenu";

export default ConverterScreen = () => {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState("");
  const [convertedValue, setConvertedValue] = useState(0);
  const [convertedUnit, setConvertedUnit] = useState("");

  function Convertion() {
    switch(selected) {
      case "ounce":
        setConvertedValue(value * 28.3495)
        setConvertedUnit("grams")
      break;
      case "Fahrenheit": 
        setConvertedValue((value - 32) * 5/9)
        setConvertedUnit("Celsius")
      break;
      case "cup":
        setConvertedValue(value * 240)
        setConvertedUnit("mililiter")
      break;
      case "inches":
        setConvertedValue(value * 2.54)
        setConvertedUnit(centimeters)
    }
  };

  useEffect(() => {
    Convertion()
  }, [value]);

  useEffect(() => {
    setValue(null);
    setConvertedUnit(null)
  }, [selected])


  return (
    <View style={styles.layout}>
      <DropdownMenu setSelected={setSelected}/>
      <View style={styles.input}>
        <InputBox title={selected} setValue={setValue} />
      </View>
      <View>
        <Text>{convertedValue} {convertedUnit}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  input: {
    margin: 10,
  }
});
