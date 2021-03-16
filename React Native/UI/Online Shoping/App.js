import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer} from "@react-navigation/native";

// Screen

// import { Home, ItemDetail } from "./Screen/";
import HomeScreen from './screens/HomeScreen';
import ComponentsScreen from './screens/ComponentsScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{ headerShown: false }}
        initialRouteName={'HomeScreens'}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ComponentsScreen" component={ComponentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
