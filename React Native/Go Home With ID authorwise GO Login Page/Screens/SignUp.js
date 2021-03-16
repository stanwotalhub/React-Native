import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Touchable,
  Input,
} from "react-native";
import { Formik } from "formik";
import { useState } from "react/cjs/react.development";
import * as yup from "yup";

const newUserSchema = yup.object({
  firstName: yup.string().required("Required.").min(3, "Min 3 Characters."),
  lastName: yup.string().required("Required.").min(3, "Min 3 Characters."),
  email: yup.string().email("Must a valid Email").required("Required."),
  password: yup
    .string()
    .min(8, "Min 8 Characters.")
    .required("Required.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]$/,
      "One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  conffirmPassword: yup
    .string()
    .required("Required.")
    .oneOf([yup.ref("password"), null], "Password must match"),
});

export default function SignUpScreen({ navigation }) {
  const [users, setUsers] = useState([
    {
      Id: "1",
      firstName: "Pankaj",
      lastName: "Suthar",
      email: "pankajb29e@gmail.com",
      password: "123456",
      conffirmPassword: "123456",
    },
  ]);

  function setUserHandler(newUser) {
    newUser.Id = Math.random().toString();
    setUsers((currentUsers) => {
      return [newUser, ...currentUsers];
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.TopContainer}>
        <Text style={styles.welcomeText}>Create Account</Text>
        <Text style={styles.welcomeSubText}>Sign up to get started!</Text>
      </View>
      <ScrollView>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            conffirmPassword: "",
          }}
          validationSchema={newUserSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            setUserHandler(values);
            console.log(values);
          }}
        >
          {(props) => (
            <View style={styles.InputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder="Enter First Name"
                onChangeText={props.handleChange("firstName")}
                value={props.values.firstName}
                textContentType="namePrefix"
                onBlur={props.handleBlur("firstName")}
              />
              <Text style={styles.errorMsg}>
                {props.touched.firstName && props.errors.firstName}
              </Text>
              <TextInput
                style={styles.inputText}
                placeholder="Enter Last Name"
                onChangeText={props.handleChange("lastName")}
                value={props.values.lastName}
                textContentType="nameSuffix"
                onBlur={props.handleBlur("lastName")}
              />
              <Text style={styles.errorMsg}>
                {props.touched.lastName && props.errors.lastName}
              </Text>
              <TextInput
                style={styles.inputText}
                placeholder="Enter Email Address"
                onChangeText={props.handleChange("email")}
                value={props.values.email}
                textContentType="emailAddress"
                onBlur={props.handleBlur("email")}
              />
              <Text style={styles.errorMsg}>
                {props.touched.email && props.errors.email}
              </Text>

              <TextInput
                style={styles.inputText}
                placeholder="Enter Password"
                onChangeText={props.handleChange("password")}
                value={props.values.password}
                textContentType="password"
                secureTextEntry={true}
                onBlur={props.handleBlur("password")}
              />
              <Text style={styles.errorMsg}>
                {props.touched.password && props.errors.password}
              </Text>

              <TextInput
                style={styles.inputText}
                placeholder="Confirm Password"
                onChangeText={props.handleChange("conffirmPassword")}
                value={props.values.conffirmPassword}
                textContentType="password"
                secureTextEntry={true}
                onBlur={props.handleBlur("conffirmPassword")}
              />
              <Text style={styles.errorMsg}>
                {props.touched.conffirmPassword &&
                  props.errors.conffirmPassword}
              </Text>

              <TouchableOpacity
                onPress={props.handleSubmit}
                activeOpacity={0.6}
              >
                <Text>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.replace("LogIn")}
                activeOpacity={0.6}
              >
                <Text style={styles.LowerButton}>Already Have Account</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TopContainer: {
    backgroundColor: "#ff0000",
    paddingHorizontal: 20,
    paddingVertical: 60,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  inputText: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ff0000",
    padding: 5,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  welcomeSubText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  InputContainer: {
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  forgotText: {
    textAlign: "right",
    marginTop: 8,
    marginBottom: 10,
  },
  LowerButton: {
    backgroundColor: "#2da7bd",
    padding: 8,
    color: "#fff",
    textAlign: "center",
    borderRadius: 10,
    fontSize: 15,
    marginTop: 10,
    marginBottom: 15,
  },
  errorMsg: {
    color: "#ff0000",
    paddingHorizontal: 5,
  },
});
