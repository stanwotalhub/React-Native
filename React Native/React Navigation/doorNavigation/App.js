import React from 'react';
import { View, Text,Button,ScrollView,Alert,TouchableOpacity, } from 'react-native';
import Product from './appnew/Product';
import Post from './appnew/Post';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons } from "@expo/vector-icons";
import{createDrawerNavigator} from "@react-navigation/drawer";
import { StatusBar } from 'expo-status-bar';



const Tab=createDrawerNavigator();



function Home({navigation}){
  return( 
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('Sub',{catid:4})}> 
    <Product prc={10} imageurl={require("./assets/dog.jpg")} iconimageurl={require("./assets/no.jpg")}  title="Dank Indian Memes"  descri="Meme BOX" />  
    </TouchableOpacity> 
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

const Sub=(props)=>{
  console.log(props.route.params.catid)
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
                <Tab.Screen name="Home" component={Home}   />
                <Tab.Screen name="Trend"   component={Trend}  />
                <Tab.Screen name="Sub"     component={Sub}    />
                <Tab.Screen name="Library" component={Library} />
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
