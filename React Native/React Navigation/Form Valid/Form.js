import React from 'react';
import { Text,Button,TextInput} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { SafeAreaView } from 'react-native-safe-area-context';
 


function App() {
  const validationSchema=Yup.object().shape({
    email:Yup.string().email().label("Email"),
    password:Yup.string().min(8).max(10).eq().label("Password")

  })
return( 
  <SafeAreaView> 
  <Formik
    initialValues={{email:'',password:''}}
    onSubmit={(value)=>console.log(value)}
    validationSchema={validationSchema}
  >
    {({  handleChange,handleSubmit,errors})=>(
      <>
      <Text>Email</Text>
  <TextInput 
   style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={handleChange("email")}
  ></TextInput>
    <Text style={{color:'red'}}> {errors.email}</Text>
  <Text>Password</Text>
  <TextInput 
   style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
   onChangeText={handleChange("password")}
  ></TextInput>
   <Text style={{color:'red'}}> {errors.password}</Text>
  <Button onPress={handleSubmit} title="Submit"></Button>
  </>
    )}
  </Formik> 
  </SafeAreaView>
  )   
}  
})
export default App;
