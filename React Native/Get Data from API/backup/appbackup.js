import React from 'react';
import { View, Text,Button,ScrollView,Alert,TouchableOpacity,Image,StyleSheet,TextInput} from 'react-native';
import Product from '../appnew/Product';
import Cat from '../Work/Cat';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Front from '../Work/Front';
import Sampledata from '../appnew/Sampledata';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons } from "@expo/vector-icons";
import{createDrawerNavigator} from "@react-navigation/drawer";
import { StatusBar } from 'expo-status-bar';
// const Tab=createDrawerNavigator();


function Head(){
  return(
    <View style={styles.headImgcon}>
        <Imagerender style={styles.headImg} />
    </View>
  )
}

const Brand = (props) => {
  return( 
    <View style={styles.brandCon}>   
      <TouchableOpacity onPress={()=>props.OnPress()} ><View style={styles.brand}><Product imageurl={require("./assets/no.jpg")} /></View></TouchableOpacity>  
      <TouchableOpacity><View style={styles.brand}><Product imageurl={require("./assets/no.jpg")} /></View></TouchableOpacity>  
      <TouchableOpacity><View style={styles.brand}><Product imageurl={require("./assets/no.jpg")} /></View></TouchableOpacity>  
      <TouchableOpacity><View style={styles.brand}><Product imageurl={require("./assets/no.jpg")} /></View></TouchableOpacity>    
    </View> 
  )
}
function Feature(){
  return( 
    <View style={styles.categoriesCon}>
      <Text style={styles.categoriesText}>Feature Items</Text>
      <Catrender />
    </View> 
  )
}
const HomeScreen = ({navigation}) => {
  return( 
    <SafeAreaView>
    <ScrollView>
      {/* <Cat /> */}
      <Head />
      <Brand OnPress={()=>navigation.navigate("Cat")}/>
      <Feature />
      <Button title="Go to cat" onPress={() => navigation.navigate("Cat")} />
      </ScrollView>
    </SafeAreaView> 
  )
}

const CatScreen = () => {
  return( 
    <View>
      <Head />
    </View> 
  )
}

//////////////// HEADER IMAGE///////////////

const Imagerender=()=>{
  let imageurl='';
    Sampledata.homeBanner.forEach((element,index) => {
      if(index==0){

        imageurl=element.image;
      }
  })
  console.log(imageurl);
  return(<Image source={{uri:imageurl.toString()}} style={{height:180,width:'100%',borderRadius:10,}}/>)
}

/////////////// BRAND IMAGE///////////////////

const Brandimagerender0=()=>{ 
  return(<Image source={{uri:imageurl.toString()}} resizeMode="cover" style={{height:60,width:34,}}/>)
  
}

///////////////// CAT IMAGE///////////////////

const Catrender=()=>{
  let imageurl='';
    Sampledata.categories.forEach((element,index) => {
      if(index==0){

        imageurl=element.image;
      }
  })
  // console.log(imageurl);
  return(<Image source={{uri:imageurl.toString()}} style={{height:200,width:150,borderRadius:10,}}/>)
  
}

const Stack = createStackNavigator();

const App=()=> {
 
return( 

  
  <NavigationContainer>
  <Stack.Navigator>  
  <Stack.Screen name="App" component={HomeScreen} />
  
  <Stack.Screen name="Cat" component={CatScreen} />
  </Stack.Navigator>
  </NavigationContainer>
  )   
}

///////////////////////////// STYLE-SHEET////////////////////////

const styles=StyleSheet.create({
  mainCon:{
    backgroundColor: '#eee',
  },
  headImgcon:{
    marginHorizontal: 10,
    // marginTop: '8.1%',
    borderRadius: 10,
    // borderWidth: 1,
  },
  headImg:{
    borderRadius: 30,
  },
  brandCon:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    // borderWidth: 1,
    marginVertical: 20,
  },
  brand:{
    height: 80,
    width:  80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    // borderWidth: 1, 
  },
  
  categoriesCon:{
    borderWidth:1,
    marginHorizontal: 10,
    flexDirection: 'row',
  },

  categoriesText:{
    fontSize: 17,
    color: 'gray'
  },
  
})
export default App;
