import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";

const dev_height = Dimensions.get("window").height;
const dev_width = Dimensions.get("window").width;

import { AntDesign } from "@expo/vector-icons";

import { ProgressBar } from "react-native-paper";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      Password: "",
    };
  }
  submit() {
    console.warn("All values", this.state);
  }
  render() {
    return (
      <KeyboardAvoidingView style={{ height: "100%", width: "100%" }}>
        {/* <ScrollView> */}
        <View
          style={{
            height: "13%",
            width: "100%",
            marginTop: "6%",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("./assets/rocket.png")}
            style={{ height: "90%", width: "20%", marginLeft: "4%" }}
          />
        </View>

        <View style={{ height: "8%", width: "100%" }}>
          <Text
            style={{ color: "#3C3D59", fontWeight: "bold", marginLeft: "8%" }}
          >
            {" "}
            STEP 1 OF 3{" "}
          </Text>
          <ProgressBar
            progress={0.3}
            color="#3C3D59"
            style={{ width: "80%", marginTop: "3%", marginLeft: "8%" }}
          />
        </View>
        <View style={{ height: "6%", width: "100%" }}>
          <Text
            style={{
              fontSize: 30,
              color: "#3C3D59",
              fontWeight: "bold",
              marginLeft: "8%",
            }}
          >
            {" "}
            Log In{" "}
          </Text>
        </View>
        <View
          style={{
            height: "18%",
            width: "100%",
            alignItems: "center",
            marginTop: "5%",
          }}
        >
          <TextInput
            style={{
              height: "45%",
              width: "80%",
              backgroundColor: "#F9FAF8",
              borderRadius: 10,
              paddingHorizontal: 20,
              color: "#9DA988",
            }}
            placeholder="Email"
            onChangeText={(text) => {
              this.setState({ Email: text });
            }}
            dataDetectorTypes="address"
          />

          <TextInput
            style={{
              height: "45%",
              width: "80%",
              backgroundColor: "#F9FAF8",
              borderRadius: 10,
              paddingHorizontal: 20,
              marginTop: "5%",
              color: "#9DA988",
            }}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({ Password: text });
            }}
          />
        </View>

        <View
          style={{
            height: "13%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.submit();
            }}
            style={{
              height: "70%",
              width: "80%",
              backgroundColor: "#468EE9",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 19, fontWeight: "bold" }}>
              Enter Dribel
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: "4%", alignItems: "center" }}>
          <TouchableOpacity>
            <Text style={{ color: "#808080" }}> Forgot The Password ? </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: "27%",
            backgroundColor: "#3C3D59",
            borderTopEndRadius: 45,
            borderTopLeftRadius: 45,
            marginTop: "3%",
            borderWidth: 0,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              borderWidth: 0,
              marginTop: "3%",
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontSize: 14,
                alignSelf: "center",
                fontWeight: "bold",
                // marginTop: "3%",
              }}
            >
              Don't have an account?
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#468EE9",
                  fontSize: 14,
                  alignSelf: "center",
                  justifyContent: "center",
                  marginTop: "3%",
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center", marginTop: 140,borderWidth:0}}>
            <Text style={{ color: "#808080", fontSize: 12,alignSelf:"center" }}>
              By Continuing, you agree that you have read and accept out
            </Text>
            <Text style={{ color: "#808080", fontSize: 12,alignSelf:"center" }}>
              T&Cs and Privacy and policy</Text>
          </View>
        </View>
        <StatusBar style="auto" />
        {/* </ScrollView> */}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
