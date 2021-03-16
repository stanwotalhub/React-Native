import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";

import { Ionicons, AntDesign } from "@expo/vector-icons";
import { ProgressBar, Colors } from "react-native-paper";

import Swiper from "react-native-swiper";

const ComponentsScreen = () => {
  return (
    <SafeAreaView style={{ height: "100%", width: "100%", borderWidth: 1 }}>
       <View
        style={{
          height: 150,
          flexDirection: "row",
          marginVertical: 5,
          width: "90%",
          marginHorizontal: "5%",
          borderRadius: 15,
          borderWidth: 1,
          borderColor: "#ccc",
        }}
      >
        {/* IMAGE VIEW */}
        <View
          style={{
            height: "100%",
            width: "30%",
            borderRadius: 15,            
          }}
        >
          <Image
            style={{ height: "100%", borderRadius: 15, width: "100%" }}
            source={{ uri: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4318138/2018/5/4/11525433792765-HERENOW-Men-Black-Printed-Round-Neck-T-shirt-2881525433792598-1.jpg"}}
          />
         
        </View>

        {/* TEXT MAIN VIEW */}

        <View
          style={{
            height: "100%",
            width: "70%",
            flexShrink: 1,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          {/* TITLE VIEW */}

          <View
            style={{
              width: "100%",
              height: 40,
              borderTopRightRadius: 15,
              flexShrink: 1,
            }}
          >
            <Text
              style={{
                flexShrink: 1,
                marginTop: "5%",
                marginLeft: "10%",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >Dello
              {" "}
           
            </Text>
          </View>

          {/* DETAIL VIEW */}

          <View
            style={{
              flexShrink: 1,
              width: "100%",
              height: 38,
            }}
          >
            <Text
              style={{
                marginLeft: "10%",
                flexShrink: 1,
              }}
            >
              {" "}Hello
        
            </Text>
          </View>

          {/* STAR VIEW */}

          <View
            style={{
              flexShrink: 1,
              height: 20,
              flexDirection: "row",
              width: "100%",
              marginTop: "4%",
            }}
          >
            <AntDesign
              name="star"
              size={18}
              color="#FFD700"
              style={{ marginLeft: "10%" }}
            />
            <Text
              style={{
                flexShrink: 1,
                marginLeft: "2%",
              }}
            >5.9
        
            </Text>
            <Text
              style={{
                flexShrink: 1,
                marginLeft: "2%",
                color: "#808080",
              }}
            >78 Review
           
            </Text>
          </View>
          <View
            style={{
              flexShrink: 1,
              height: 22,
              width: "100%",
              borderBottomRightRadius: 15,
              marginTop: "4%",
            }}
          >
            <Text
              style={{
                flexShrink: 1,
                borderBottomRightRadius: 15,
                fontWeight: "bold",
                marginLeft: "10%",
                borderWidth: 0,
              }}
            >Rs. 879.00
            
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  continue: {
    height: "100%",
    width: "100%",
  },
});

export default ComponentsScreen;
