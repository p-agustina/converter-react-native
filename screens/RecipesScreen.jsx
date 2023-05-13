import { View, Text, StyleSheet, Button } from "react-native";

export default RecipesScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Recipes page</Text>
      <Button title="BOTONNNN" />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
