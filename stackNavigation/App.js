// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { createDrawerNavigator } from '@react-navigation/drawer';


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
      title="Go To Secont Screen" 
      onPress={ () => navigation.navigate('SecondScreen')}
      />
    </View>
  );
}
function SecondScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Second Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

// const Drawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>

      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator> */}

      <Stack.Navigator screenOptions={{title:"Home"}} >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;