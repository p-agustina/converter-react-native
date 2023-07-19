import { Button, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/HomeScreen";
import RecipesScreen from "./screens/RecipesScreen";
import ConverterScreen from "./screens/ConverterScreen";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Recipes" component={RecipesScreen}/>
      <Tab.Screen name="Converter" component={ConverterScreen}/>
    </Tab.Navigator>
  );
};


// // --- Onboarding screens ---
// const Stack = createStackNavigator();

// const SignInScreen = (props) => {
//   return (
//     <View style={styles.layout}> 
//       <Text style={styles.title}>Sign in screen</Text>
//       <Button
//         title="Sign up"
//         onPress={() => props.navigation.navigate("SignUp")}
//       />
//     </View>
//   );
// };

// const SignUpScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.layout}>
//       <Text style={styles.title}>Sign up screen</Text>
//       <Button
//         title="Continue"
//         onPress={() => navigation.navigate("Main")}
//       />
//     </View>
//   );
// };

// --- App ---
// 
// 

const App = () => (
  <NavigationContainer>
    <MainNavigator/>
    {/* <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator> */}
  </NavigationContainer>
);

export default App;

// const styles = StyleSheet.create({
//   layout: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 8,
//   },
//   title: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });
