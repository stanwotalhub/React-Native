import React from 'react';
import { View, Text,Button,ScrollView,Alert } from 'react-native';
import Product from './appnew/Product';
import Post from './appnew/Post';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons } from "@expo/vector-icons"


const Tab=createBottomTabNavigator();



function Home({navigation}){
  return(
    <View>
    <Product prc={10} imageurl={require("./assets/dog.jpg")}  title="Dank Indian Memes"  descri="Meme BOX" />  
    {/* <Product prc={10} imageurl={require("./assets/dog.jpg")} title="Dank Indian Memes" descri="Meme BOX"/> */}
    <Button
      title="Go To Secont Screen" 
      onPress={ () => navigation.navigate('Trend')}
      />  
    </View>
  )
}
const Trend=()=>{
  return(
    <View style={{alignItems:"center",justifyContent:"center"}}> 
    <Text>Trend</Text>
    </View>
  )
}

const Sub=()=>{
  return(
  <View>
    <Text>Subscribe</Text>
  </View>
  )
}

const Library=()=>{
  return(
  <View>
    <Text>Library</Text>
  </View>
  )
}

// const Stack = createStackNavigator();


function App() {
  return ( 
           <NavigationContainer>
              <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home"   component={Home}    options={{tabBarIcon:({focused})=><MaterialCommunityIcons focused={focused} name="home"                      size={35}/>}}/>
                <Tab.Screen name="Trend"  component={Trend}   options={{tabBarIcon:({focused})=><MaterialCommunityIcons focused={focused} name="fire"                      size={35}/>}}/>
                <Tab.Screen name="Sub"    component={Sub}     options={{tabBarIcon:({focused})=><MaterialCommunityIcons focused={focused} name="youtube-subscription"      size={35}/>}}/>
                <Tab.Screen name="Library"    component={Library}     options={{tabBarIcon:({focused})=><MaterialCommunityIcons focused={focused} name="home" size={35}/>}}/>
                </Tab.Navigator>
                {/* play-box-multiple */}
                {/* <Stack.Navigator screenOptions={{title:"Home"}} >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SecondScreen" component={Trend} />
                </Stack.Navigator> */}
           </NavigationContainer>  
  );
}

export default App;
