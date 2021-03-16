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
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image } from 'react-native';
import Sampledata from './appnew/Sampledata';
import Categories from './api/Categories';
import { useEffect } from 'react';
 
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

const RenderItem=({item})=>{
  return(
    <View>
      <Image source={{uri:item.imagePath}} style={{height:200,width:150}} />
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>{item.subTitle}</Text>
    </View>
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
  },
});

export default App;