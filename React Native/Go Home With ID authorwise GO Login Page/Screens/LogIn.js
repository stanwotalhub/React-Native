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
  Image,
  ImageBackground,
} from "react-native";
import { Formik } from "formik";

export default function LogInScreen({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        source={require("../assets/Background/Back5.png")}
      >
        <View style={styles.TopContainer}>
          <Image
            style={{ height: 49, width: 350 }}
            source={require("../assets/Logo/logo.png")}
          />
        </View>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(props) => (
            <View style={styles.InputContainer}>
              <Text style={styles.welcomeText}>Login</Text>
              <View style={{ marginTop: 15 }}>
                <TextInput
                  style={styles.inputText}
                  placeholder="Phone number"
                  onChangeText={props.handleChange("username")}
                  value={props.values.username}
                  textContentType="username"
                  keyboardType="number-pad"
                />
                <TextInput
                  style={styles.inputText}
                  placeholder="OTP"
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                  textContentType="password"
                  // secureTextEntry={true}
                  keyboardType="number-pad"
                />
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                  borderWidth: 0,
                }}
              >
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 0,
                    // backgroundColor: "#056FEB",
                    backgroundColor: "#006038",
                    // backgroundColor: "#2da7bd",
                    width: "60%",
                    height: 70,
                    borderRadius: 10,
                  }}
                  onPress={() => navigation.replace("SignUp")}
                  activeOpacity={0.6}
                >
                  <Text style={styles.ButtonSignUp}>Login</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderWidth: 0,
                  alignItems: "center",
                  marginTop: "50%",
                  paddingBottom: 25,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#808080" }}>
                  JMC Hospital Hisar
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    // borderWidth: 1,
  },
  TopContainer: {
    // backgroundColor: "#ff0000",
    paddingHorizontal: 20,
    paddingVertical: 60,
    // borderWidth: 1,
  },
  inputText: {
    marginVertical: 10,
    backgroundColor: "#F9FAF8",
    color: "#808080",
    paddingHorizontal: 20,
    height: 60,
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
  },
  welcomeText: {
    color: "#3C3D59",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "left",
    // borderWidth: 1,
  },
  InputContainer: {
    marginTop: "20%",
    paddingHorizontal: 20,
    // borderWidth: 1,
  },

  ButtonSignUp: {
    color: "#fff",
    // textAlign: "center",
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
    // marginTop: 10,
    borderWidth: 0,
  },
});
