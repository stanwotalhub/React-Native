import * as React from 'react';
import { View, Text,StyleSheet,Image,Button,TouchableOpacity} from 'react-native';
import { color } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

 
 
function Product(props) {
  return (
   <View style={styles.maincontainer}>

<View style={styles.catCon}>
<Image style={{height:50,width:50,}} source={props.imageurl} />
    </View>
    

    {/* const Brandimagerender1=()=>{
  let imageurl='';
    Sampledata.brands.forEach((element,index) => {
      if(index==1){

        imageurl=element.image;
      }
  })
  console.log(imageurl);
  return(<Image source={{uri:imageurl.toString()}} resizeMode="cover" style={{height:60,width:34,}}/>)
  
}
const Brandimagerender2=()=>{
  let imageurl='';
    Sampledata.brands.forEach((element,index) => {
      if(index==2){

        imageurl=element.image;
      }
  })
  console.log(imageurl);
  return(<Image source={{uri:imageurl.toString()}} resizeMode="cover" style={{height:50,width:50,}}/>)
  
}
const Brandimagerender3=()=>{
  let imageurl='';
    Sampledata.brands.forEach((element,index) => {
      if(index==3){

        imageurl=element.image;
      }
  })
  console.log(imageurl);
  return(<Image source={{uri:imageurl.toString()}} resizeMode="cover" style={{height:50,width:50,}}/>)
  
} */}



    {/* <View style={styles.data}>

     <View style={styles.logoCon}>
      <Image style={styles.logo}  source={props.iconimageurl}  />
     </View>

      <View style={styles.textCon}>

        <View style={styles.titleCon}>
        <Text style={styles.title}>{props.titl}</Text>
      </View>

      <View style={styles.desCon}>
       <Text style={styles.descri}>{props.descri}</Text>
      </View>

     </View>
    </View> */}
    {/* <StatusBar style="auto" /> */}
    
  </View> 
  )
}
const styles=StyleSheet.create({
    // maincontainer:{
    //   backgroundColor: '#F9F9F9',
    //   elevation: 2,
    //   marginVertical: 5,
    //   width: '100%',
    // },
    
    // image:{
    //   width:'100%',
    //   height:200,
    // },
    
    // logoCon: {
    //   width: 70,
    //   height: 70,
    //   alignSelf: 'flex-start',
    //   borderRadius: 150,
    //   backgroundColor: '#eee',

    // },
    // logo:{
    //   width: 70,
    //   height: 70,
    //   borderRadius: 150,
    // },

    // textCon: {
    //   marginVertical: 15,
    //   width: '78%',
    //   alignSelf: 'flex-end',
    //   marginTop: -70,
    // },

    // title:{
    //   fontSize: 16,
    // },

    // desCon: {
    //   marginVertical: 10,
    // },

    // descri:{
    //   color: 'gray',
    //   fontSize: 12,
    //   fontFamily: 'sans-serif',
    // },

    // data: {
    //   marginHorizontal: 15,
    //   marginVertical: 15,
    // },
    // catCon:{
    //   flexDirection: 'row',
    //   marginTop: 10,
    // },
    // button: {
    //   alignItems: "center",
    //   backgroundColor: "white",
    //   padding: 10,
    //   borderWidth: 1,
    //   borderColor: '#ccc',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   flex: 1,
    //   marginHorizontal: 5,
    // },
  
}
)

export default Product;