import * as React from 'react';
import { View, Text,StyleSheet,Image,Button,TouchableOpacity} from 'react-native';
import { color } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import Sampledata from '../appnew/Sampledata';


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
 
function Cat() {
  return (
   <View>
    <Imagerender />
  </View> 
  )
}
const styles=StyleSheet.create({
  
}
)

export default Cat;