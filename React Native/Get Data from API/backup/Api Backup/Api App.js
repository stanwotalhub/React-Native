// import React,{useEffect} from 'react';
// import { View, Text,Button,ScrollView,Alert,TouchableOpacity,Image,StyleSheet,TextInput} from 'react-native';
// import Test from  './appnew/Test';
// import Categories from './api/Categories'; 
 
 
// const App=()=> {
 
//   const GetData=async()=>{
//     const data=await Categories.GetCategorie();
//     if(!data.ok) return console.log(data.originalError);

//     console.log(data.data);
//   }
//   useEffect(()=>{
//     GetData()
// },[]);

// // const Testb=()=> {
// //   return(
// //     <Test/>
// //   )
// // };

// return(  
//   <View>
//     <Text>Hello World!</Text>
//     <Test />
//    </View>
//   )   
// }


// const styles=StyleSheet.create({
  
  
// })
// export default App;


import React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet,ScrollView, Text, StatusBar,Image,TouchableOpacity } from 'react-native';
// import Sampledata from './appnew/Sampledata';
import Categories from './api/Categories';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => { 
  const [CatData,SetCatData]=useState();
    const GetData=async()=>{
    const data=await Categories.GetCategorie();
    if(!data.ok) return console.log(data.originalError);

   SetCatData(data.data);
  }
  useEffect(()=>{
    GetData()
},[]);


const Cat=(props)=>{
  console.log(props.route.params.catid)
  return(
  <View>
    <Text>Subscribe</Text>
  </View>
  )
}

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={RenderItem} options={{ title: 'Home' }}/>
        <Stack.Screen name="Categories" component={Cat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const RenderItem=({item})=>{
  return(
    <SafeAreaView>
    <ScrollView style={{}} >
      <TouchableOpacity onPress={()=> navigation.navigate('Cat',{catid:4})}><Image style={styles.img} source={{uri:item.imagePath}} style={{height:200,width:150}} /></TouchableOpacity>
      <Text style={styles.text} >{item.name}</Text>
      <Text style={styles.des} >{item.description}</Text>
      <Text style={styles.sub} >{item.subTitle}</Text>
    </ScrollView>
    </SafeAreaView>
)
}
  
  return (
    <SafeAreaView style={styles.container}>     
      <FlatList
        data={CatData}
        renderItem={RenderItem}
        keyExtractor={item => item.id}/>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    
  },
  title: {
    fontSize: 32,
    // borderWidth: 1,
  },
  text:{
    marginVertical: 5,
  },
  img:{
    flex:1,
    backgroundColor: 'black'
  },
});

export default App;