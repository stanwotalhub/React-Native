import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  StatusBar,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
// NAVIGATION
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// SRC
import Put from "./src/Put";

// ICON
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { create } from "apisauce";
import { render } from "react-dom";

import { SwipeListView } from "react-native-swipe-list-view";

const Home = ({ navigation }) => {
  const [apiData, setApiData] = useState();
  const [name, setname] = useState();

  const api = create({
    baseURL: "http://demoapi.kmaschool.com/api/",
  });

  const getApi = async () => {
    const data = await api.get("Countries");
    if (!data.ok) return console.log(data.originalError);
    setApiData(data.data);
  };

  const deleteApi = async (id) => {
    const dataDelete = await api.delete("Countries/" + id);
    if (!dataDelete.ok) return console.log(dataDelete.originalError);
    getApi();
  };

  useEffect(() => {
    getApi();

    const unsubscribe = navigation.addListener("focus", () => {
      getApi();
      //Put your Data loading function here instead of my loadData()
    });

    return unsubscribe;
  }, [navigation]);

  const handleAddData = async (name) => {
    const data = await api.post("Countries", { name: name });
    if (!data.ok) return console.log(data.originalError);
    if (data.ok) {
      setname("dddd");
      getApi();
    }
  };

  const putApi = async (name) => {
    const data = await api.put("Countries/92", { name: name });
    if (data.ok) return upApi();
    Keyboard();
  };

  return (
    <View style={{ height: "100%" }}>
      {/* <ImageBackground
        style={{ height: "100%", width: "100%" }}
        source={require("./assets/back4.png")}
      > */}

      {/* SwipeListView */}
      <SwipeListView
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        data={apiData}
        renderItem={({ item }) => (
          <View style={styles.view}>
            <View
              style={{
                borderWidth: 2,
                borderRadius: 5,
                borderColor: "#00AFDB",
                width: 10,
                height: 10,
                marginHorizontal: 10,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Text style={{ paddingRight: 10 }}>{item.id}</Text>
              <Text style={styles.name}>{item.name}</Text>
              <View style={{ flexDirection: "row", marginRight: 5 }}>
                {/* <TouchableOpacity>
                  <View style={styles.button}>
                    <Text>Edit</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteApi(item.id)}>
                  <View style={styles.button}>
                    <Text>Delete</Text>
                  </View>
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
        )}
        // HIDDEN ITEM
        renderHiddenItem={({ item }) => (
          <View style={styles.hiddenItem}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Put", {
                  routeId: item.id,
                  routeName: item.name,
                })
              }
              // onPress={() => putApi(item.id)}
              style={{ width: "23%", height: "100%" }}
            >
              {/* <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Put", {
                    routeId: id,
                    routeName: name,
                  })
                }
              > */}
              <View style={styles.editView}>
                <Text style={styles.edit}>Edit</Text>
              </View>
            </TouchableOpacity>
            {/* </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() => deleteApi(item.id)}
              style={{ width: "23%" }}
            >
              <View style={styles.deleteView}>
                <Text style={styles.delete}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-75}
        rightOpenValue={-95}
      />
      {/* END SwipeListView */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginVertical: 5,
        }}
      >
        <TextInput
          autoCompleteType="name"
          style={styles.input}
          placeholder="Write a task"
          onChangeText={(text) => setname(text)}
          onSubmitEditing={() => handleAddData(name)}
          ref={(input) => {
            textInput = input;
          }}
        />
        <TouchableOpacity onPress={() => handleAddData(name)}>
          <View style={styles.addWrapper}>
            <Ionicons name="send" size={24} color="#00AFDB" />
            {/* <AntDesign name="enter" size={24} color="black" /> */}
          </View>
        </TouchableOpacity>
      </View>
      {/* </ImageBackground> */}

      <StatusBar styles="auto" />
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Put" component={Put} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    marginRight: 0,
    marginVertical: 10,
    flexShrink: 1,
    backgroundColor: "#FFF",
  },
  view: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 40,
    marginTop: -15,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    color: "#C0C0C0",
  },
  button: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  hiddenItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "74%",
    marginTop: 11,
    marginHorizontal: 20,
    borderRadius: 10,
    flexShrink: 1,
  },
  deleteView: {
    backgroundColor: "red",
    height: "100%",
    width: "100%",
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomEndRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  delete: {
    fontSize: 18,
    alignItems: "center",
    color: "#FFF",
  },
  editView: {
    backgroundColor: "green",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  edit: {
    fontSize: 18,
    alignItems: "center",
    color: "#FFF",
  },
});
export default App;
