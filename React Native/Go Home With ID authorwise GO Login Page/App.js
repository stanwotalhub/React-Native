import React, { useState, useEffect } from "react";
import HomeScreen from "./Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogInScreen from "./Screens/LogIn";
import SignUpScreen from "./Screens/SignUp";
import * as SecureStore from "expo-secure-store";

const apiresponse = "43";
const Stack = createStackNavigator();

function LogInStack({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="LogIn"
        component={LogInScreen}
        options={{ headerTitle: "Log In" }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerTitle: "Sign Up" }}
      />
    </Stack.Navigator>
  );
}

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default App = () => {
  const [user, setuser] = useState(null);

  const setuserstore = async () => {
    await SecureStore.setItemAsync("user", apiresponse);
  };

  const deleteuser = async () => {
    await SecureStore.deleteItemAsync("user");
  };

  const getuserstore = async () => {
    const data = await SecureStore.getItemAsync("user");
    setuser(data);
  };

  useEffect(() => {
    setuserstore();
    deleteuser();
    getuserstore();
  }, []);
  return (
    <React.Fragment>
      <NavigationContainer>
        {user != null ? <HomeStack /> : <LogInStack />}
      </NavigationContainer>
    </React.Fragment>
  );
};
