import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";

// const Dev_Height = Dimensions.get("window").height;
// const Dev_Width = Dimensions.get("window").width;

import { Ionicons, Octicons, SimpleLineIcons } from "@expo/vector-icons";
import SelectInput from 'react-native-select-input-ios'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "<$220.000",
        },
        {
          name: "Fore Sale",
        },
        {
          name: "3-4 Beds",
        },
      ],

      items2: [
        {
          rate: "$200.000",
          address: "Jenison,MI 49428,SF",
          specs: "4 bedrooms / 2 bathroom / 1416 ft2",
          uri:
            "https://i.pinimg.com/564x/46/05/f8/4605f84639e63b3d12f031d4c6ac112a.jpg",
        },
        {
          rate: "$480.000",
          address: "Jenison,MI 49428,SF",
          specs: "4 bedrooms / 2 bathroom / 1416 ft2",
          uri:
            "https://i.pinimg.com/564x/dd/5b/8b/dd5b8b980a5c0c05de197ce95b290711.jpg",
        },
      ],
    };
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={{ height: "70%", width: "80%",borderWidth:0, }}>
        <TouchableOpacity style={styles.list_1}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  _renderItem2 = ({ item, index }) => {
    return (
      <View>
        <View style={{ height: 170, marginTop: "4%" }}>
          <ImageBackground
            source={{ uri: item.uri }}
            imageStyle={{ borderRadius: 25 }}
            style={{ height: "100%", width: "95%", marginLeft: "5%" }}
          >
            <TouchableOpacity style={styles.icon_list}>
              <SimpleLineIcons name="heart" size={23} />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginTop: "4%",
                fontSize: 27,
                marginLeft: "7%",
                fontWeight: "700",
                color: "#3b444b",
              }}
            >
              {" "}
              {item.rate}{" "}
            </Text>
            <Text style={{ marginTop: "5.5%", color: "#808080" }}>
              {" "}
              {item.address}{" "}
            </Text>
          </View>
          <View>
            <Text style={{ marginTop: "2%", marginLeft: "9%" }}>
              {" "}
              {item.specs}{" "}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{ flexDirection: "row", height: "10%", alignItems: "center" }}
        >
          {/* ICON MENU */}

          <TouchableOpacity style={styles.icon_1}>
            <Ionicons
              name="ios-menu"
              size={20}
              color="#161F3D"
              style={{ marginTop: "30%" }}
            />
          </TouchableOpacity>

          {/* ICON SEARCH */}

          <TouchableOpacity style={styles.icon_2}>
            <Ionicons
              name="ios-search"
              size={20}
              color="#161F3D"
              style={{ marginTop: "30%" }}
            />
          </TouchableOpacity>
        </View>

        <Text style={{ marginTop: "7%", marginLeft: "5%", color: "#808080" }}>
          {" "}
          City{" "}
        </Text>
        <View
          style={{
            height: "10%",
            width: "80%",
            marginTop: "2%",
            flexDirection: "row",
          }}
        >
          <SelectInput
            value={0}
            style={{
              height: "100%",
              width: "93%",
              marginLeft: 24,
              justifyContent: "center",
              borderBottomColor: "#F1F1F1",
              borderBottomWidth: 3,
            }}
            lableStyle={{ fontSize: 27 }}
            options={[{ value: 0, label: "San Fransisco" }]}
          />
          <Octicons
            name="settings"
            size={23}
            color="#161F3D"
            style={{ marginTop: "5%" }}
          />
        </View>
        <View style={{}}>
          <FlatList
            data={this.state.items}
            renderItem={this._renderItem}
            horizontal={true}
            style={{
              marginLeft: "7%",
              height: "8%",
              width: "100%",
              marginTop: "5%",
            }}
          />
        </View>
        <View style={{ height: "65%", width: "100%", marginTop: "2%" }}>
          <FlatList
            data={this.state.items2}
            renderItem={this._renderItem2}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
        <TouchableOpacity style={styles.simpleFloatButton}>
          <Text style={{ color: "#FFF", fontSize: 15 }}>
            {" "}
            <SimpleLineIcons name="compass" style={15} /> Map View
          </Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // height: Dev_Height,
    height: "100%",
    // width: Dev_Width,
    width: "100%",
  },
  icon_1: {
    height: "75%",
    width: "13%",
    marginLeft: "4%",
    marginTop: "7%",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#f1f1f1",
  },
  icon_2: {
    height: "75%",
    width: "13%",
    marginLeft: "65%",
    marginTop: "7%",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#f1f1f1",
  },
  list_1: {
    height: "100%",
    width: "100%",
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 45,
  },
  icon_list: {
    backgroundColor: "#FFF",
    height: "25%",
    width: "12%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "78%",
    marginTop: "4%",
  },
  simpleFloatButton: {
    position: "absolute",
    width: "35%",
    height: "9%",
    alignItems: "center",
    justifyContent: "center",
    right: 130,
    bottom: 30,
    backgroundColor: "#161F3D",
    borderRadius: 45,
  },
});
