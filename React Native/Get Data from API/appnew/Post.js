import * as React from 'react';
import { View, Text,StyleSheet,Image,ScrollView} from 'react-native';
 
 
function Post(props) {
  return (
   <ScrollView style={styles.main}>
           <View style={styles.titleCon}>
             <Text style={styles.titel}>Titel :  {props.title}</Text>
           </View>

       <ScrollView styles={styles.imgCol}>
            <Image style={styles.image} source={props.imageurl} />
       </ScrollView>

       <View style={styles.textContainer}> 
            <Text style={styles.textstyle}>Like    {props.Disc}</Text>
            <Text style={styles.textstyle}>Comment {props.prc}</Text>            
            <Text style={styles.textstyle}>Share   {props.prc}</Text>            
       </View>
  </ScrollView> 
  )
}
const styles=StyleSheet.create({
    main:{
    backgroundColor: "white",
    marginHorizontal: 10,
    marginTop: 5,
    marginVertical: 5,
    borderWidth: 1,
    },
    titleCon: {

    },
titel: {
    marginLeft: 0,
    fontSize: 20,
    marginTop: 0,

},
    image: {
     width:  '100%',
    //  height: '100%',
     borderRadius:5,
     marginTop: 15,
     borderRadius: 10,
     marginTop: 0,
    },
    imgCol: {
     width: '80%',
     height: '100%',
     borderRadius:5,
     marginTop: 15,
     borderColor: 'black',
     borderWidth: 1,
     marginTop: 5,
    },
textContainer: {
    flexDirection: 'row',
},
    textstyle:{
      paddingLeft: 20,
      marginVertical: 5,
      fontSize:16,
},
})

export default Post;