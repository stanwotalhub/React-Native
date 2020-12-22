import * as React from 'react';
import { View, Text,StyleSheet,Image,} from 'react-native';
import { color } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
 
 
function Product(props) {
  return (
   <View style={styles.maincontainer}>

    <View style={styles.imgCon}>
      <Image style={styles.image} source={props.imageurl} />
    </View>

    <View style={styles.data}>

     <View style={styles.logoCon}>
      <Image style={styles.logo}></Image>
     </View>

      <View style={styles.textCon}>

        <View style={styles.titleCon}>
        <Text style={styles.title}>{props.title}</Text>
      </View>

      <View style={styles.desCon}>
       <Text style={styles.descri}>{props.descri}</Text>
      </View>

     </View>
    </View>
    <StatusBar style="auto" />
  </View> 
  )
}
const styles=StyleSheet.create({
    maincontainer:{
      backgroundColor: '#F9F9F9',
      elevation: 2,
      marginVertical: 5,
      // marginTop: '5.1%',
      width: '100%',
    },
    
    image:{
      width:'100%',
      height:200,
    },
    
    logoCon: {
      borderWidth: 1,
      width: '20%',
      height: 75,
      alignSelf: 'flex-start',
      // borderRadius: '50%',
      borderRadius: 150,
      paddingVertical: 20,
      backgroundColor: '#eee',
    },
    logo:{
      // borderRadius: '50%',
      // borderWidth: 1,
      width: '20%',
      height: 75,
      alignSelf: 'flex-start',
      borderRadius: 150,
      paddingVertical: 20,
    },

    textCon: {
      marginVertical: 15,
      // borderWidth: 1,
      width: '78%',
      alignSelf: 'flex-end',
      marginTop: -70,
    },

    title:{
      fontSize: 16,
    },

    desCon: {
      marginVertical: 10,
    },

    descri:{
      color: 'gray',
      fontSize: 12,
      fontFamily: 'sans-serif',
    },

    data: {
      marginHorizontal: 15,
      marginVertical: 15,
    },
}
)

export default Product;