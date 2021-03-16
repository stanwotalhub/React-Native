import * as React from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';

 
 
function Front() {
  return (
   <View style={styles.maincontainer}>

    <View style={styles.catCon}>    
    <TouchableOpacity> <Text>Press Here</Text> </TouchableOpacity>
    <TouchableOpacity> <Text>Press Here</Text> </TouchableOpacity>
    <TouchableOpacity> <Text>Press Here</Text> </TouchableOpacity>
    </View>

  </View> 
  )
}

const styles=StyleSheet.create({
    catCon:{
        flexDirection: 'column',
    },
}
)

export default Front;