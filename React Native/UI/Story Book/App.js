// import { StatusBar } from "react-native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { ProgressBar, Colors } from "react-native-paper";

const Dev_Height = Dimensions.get("window").height;
const Dev_Width = Dimensions.get("window").width;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          title1: "Matilda",
          title2: "By George Hills",
          uri:
            "https://static.dribbble.com/users/2305647/screenshots/5487663/6_800_600.jpg",
        },
        {
          title1: "Lady Moon",
          title2: "By George Hills",
          uri:
            "https://i.pinimg.com/236x/eb/a4/b2/eba4b2f07e477aa5349e8ef82daa9979.jpg",
        },
        {
          title1: "Mid Night",
          title2: "By Kartik Mehra",
          uri:
            "https://i.pinimg.com/564x/0c/f5/2b/0cf52be575dee86521e3aebd96aa9c86.jpg",
        },
        {
          title1: "Joker",
          title2: "By Rim Master",
          uri:
            "https://www.hdwallpapers.in/thumbs/2021/joker_is_standing_in_police_car_background_4k_hd_joker-t2.jpg",
        },
      ],
      items2: [
        {
          title: "The Blue Bear",
          by: "By Tesa Stvens",
          star: "2.5",
          review: "(24 Review)",
          uri2:
            "https://cdn.dribbble.com/users/2305647/screenshots/4660026/800_600_bear.jpg",
        },
        {
          title: "Mina Laina",
          by: "By Elsa Sabina",
          star: "4.2",
          review: "(69 Review)",
          uri2:
            "https://cdn.dribbble.com/users/2305647/screenshots/5369217/2_600_800.jpg",
        },
        {
          title: "The UP Way",
          by: "By Dlear Borio",
          star: "4.9",
          review: "(55 Review)",
          uri2:
            "https://th.bing.com/th/id/Rf27607ca0d1f555bcff43bc662278a54?rik=9cHW%2bmVTFZBLUA&riu=http%3a%2f%2fwww.designyourway.net%2fblog%2fwp-content%2fuploads%2f2017%2f12%2fTheWayUp-cvr.jpg&ehk=UXrNzn67B76uOfzOPaxzALWjUWfMRdYA9RxNe%2fCtd6o%3d&risl=&pid=ImgRaw",
        },
        {
          title: "Joker",
          by: "By Rim Master",
          star: "3.9",
          review: "(204 Review)",
          uri2:
            "https://www.hdwallpapers.in/thumbs/2021/joker_is_standing_in_police_car_background_4k_hd_joker-t2.jpg",
        },
      ],
    };
  }
  _render_item = ({ item, index }) => {
    return (
      <TouchableOpacity>
        {/* <View style={{marginRight:20}}> */}
        <View style={{}}>
          <ImageBackground
            source={{ uri: item.uri }}
            imageStyle={{ borderRadius: 25 }}
            style={{ height: "100%", width: 140 }}
          >
            <Text
              style={{
                marginTop: "95%",
                color: "#FFF",
                fontSize: 15,
                marginLeft: 10,
                fontWeight: "bold",
              }}
            >
              {item.title1}
            </Text>
            <Text style={{ color: "#FFF", fontSize: 12, marginLeft: 10 }}>
              {item.title2}
            </Text>
          </ImageBackground>
        </View>
        {/* </View> */}
      </TouchableOpacity>
    );
  };
  // RENDER ITEMS 2
  _renderListItem = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <View
          style={{
            height: 150,
            flexDirection: "row",
            width: "100%",
            marginVertical: 5,
          }}
        >
          <View style={{ height: "100%", width: "25%", marginLeft: "0%" }}>
            <Image
              style={{ height: "100%", borderRadius: 15, width: "100%" }}
              source={{ uri: item.uri2 }}
            />
          </View>

          <View>
            <Text
              style={{
                marginTop: "5%",
                marginLeft: "10%",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {" "}
              {item.title}{" "}
            </Text>
            <Text style={{ marginLeft: "10%" }}> {item.by}</Text>
            <View style={{ flexDirection: "row", marginTop: "4%" }}>
              <AntDesign
                name="star"
                size={18}
                color="#FFD700"
                style={{ marginLeft: "10%" }}
              />
              <Text style={{ marginLeft: "2%" }}>{item.star}</Text>
              <Text style={{ marginLeft: "2%", color: "#808080" }}>
                {item.review}
              </Text>
            </View>
            <ProgressBar
              style={{
                marginLeft: "13%",
                height: "15%",
                width: 150,
                marginTop: "8%",
              }}
              progress={0.5}
              color="#7FA1F8"
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      // ICON TOP VIEW

      <SafeAreaView style={{ height: "100%", width: Dev_Width }}>
        <View
          style={{
            height: "7%",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "0%",
            borderWidth: 0,
          }}
        >
          <TouchableOpacity style={{ marginLeft: "8%" }}>
            <Ionicons name="ios-menu" size={32} color="#7FA1F8" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: "70%" }}>
            <AntDesign name="shoppingcart" size={24} color="#7FA1F8" />
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>

        {/* MAIN HEADING */}

        <View style={{ height: "8%", width: "100%" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: "7%",
              marginTop: "2%",
            }}
          >
            Childern's store book{" "}
          </Text>
        </View>

        {/* FLAT LIST ROW */}

        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          <View>
            <FlatList
              // showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={this.state.items}
              renderItem={this._render_item}
              horizontal={true}
              style={{
                // marginLeft: 27,
                marginRight: 27,
                // marginLeft: "7%",
                height: 225,
                alignSelf: "center",
                width: "95%",
                marginRight: 0,
              }}
              ItemSeparatorComponent={() => (
                <View
                  style={{ width: 13, height: "100%", borderWidth: 0 }}
                ></View>
              )}
            />
          </View>

          {/* SECOND HEADING */}

          <View
            style={{ height: 90, justifyContent: "center", borderWidth: 0 }}
          >
            <Text style={{ marginLeft: 23, fontWeight: "bold" }}>
              Your Bookmarker Stories
            </Text>
          </View>

          {/* <ScrollView> */}

          {/* FLAT LIST COL 2 */}

          <View>
            <FlatList
              // showsVerticalScrollIndicator={false}
              data={this.state.items2}
              renderItem={this._renderListItem}
              style={{
                marginLeft: "7%",
                height: "100%",
                width: "100%",
                marginRight: 0,
              }}
              ItemSeparatorComponent={() => (
                <View style={{ width: 13, borderWidth: 0 }}></View>
              )}
            />
          </View>

          {/* BOOK BOX COLEM 1 */}
          {/* 
          <View style={{ height: 150, flexDirection: "row", width: "100%" }}>
            <View style={{ height: "100%", width: "25%", marginLeft: "7%" }}>
              <Image
                style={{ height: "100%", borderRadius: 15, width: "100%" }}
                source={{
                  uri:
                    "https://cdn.dribbble.com/users/2305647/screenshots/4660026/800_600_bear.jpg",
                }}
              />
            </View>

            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  marginLeft: "10%",
                  marginTop: "5%",
                }}
              >
                The Blue Bear
              </Text>
              <Text style={{ marginLeft: "10%" }}>By Tesa Stvens</Text>

              <View style={{ flexDirection: "row", marginTop: "4%" }}>
                <AntDesign
                  name="star"
                  size={18}
                  color="#FFD700"
                  style={{ marginLeft: "10%" }}
                />
                <Text style={{ marginLeft: "2%" }}>4.8</Text>
                <Text style={{ marginLeft: "2%", color: "#808080" }}>
                  (54 Review)
                </Text>
              </View>
              <ProgressBar
                style={{
                  marginLeft: "13%",
                  height: "15%",
                  width: 150,
                  marginTop: "8%",
                }}
                progress={0.2}
                color="#7FA1F8"
              />
            </View>
          </View> */}

          {/* BOOOK BOX COLEM 2 */}

          {/* <View
            style={{
              height: 150,
              flexDirection: "row",
              width: "100%",
              marginTop: "2%",
            }}
          >
            <View style={{ height: "100%", width: "25%", marginLeft: "7%" }}>
              <Image
                style={{ height: "100%", borderRadius: 15, width: "100%" }}
                source={{
                  uri:
                    "https://cdn.dribbble.com/users/2305647/screenshots/5369217/2_600_800.jpg",
                }}
              />
            </View>

            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  marginLeft: "10%",
                  marginTop: "5%",
                }}
              >
                Mina Laina
              </Text>
              <Text style={{ marginLeft: "10%" }}>By Elsa Sabina</Text>

              <View style={{ flexDirection: "row", marginTop: "4%" }}>
                <AntDesign
                  name="star"
                  size={18}
                  color="#FFD700"
                  style={{ marginLeft: "10%" }}
                />
                <Text style={{ marginLeft: "2%" }}>4.8</Text>
                <Text style={{ marginLeft: "2%", color: "#808080" }}>
                  (76 Review)
                </Text>
              </View>
              <ProgressBar
                style={{
                  marginLeft: "13%",
                  height: "15%",
                  width: 150,
                  marginTop: "8%",
                }}
                progress={0.5}
                color="#7FA1F8"
              />
            </View>
          </View> */}

          {/* END OF 2 BOOK BOX */}
          {/* END OF APP */}
          {/* </ScrollView> */}
        {/* </ScrollView> */}
      </SafeAreaView>
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
