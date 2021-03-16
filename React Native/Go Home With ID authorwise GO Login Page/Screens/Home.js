import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CATEGORIES } from "../DumyData/Data";

// Home Screen Data
const HomeScreen = ({ navigation }) => {
  const renderItemsData = (itemData) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          ...Styles.gridItem,
          ...{ backgroundColor: itemData.item.color },
        }}
        onPress={() => {
          navigation.navigate("Review", {
            name: itemData.item.tittle,
            categoryId: itemData.item.id,
          });
        }}
      >
        <View>
          <Text style={Styles.itemText}>{itemData.item.tittle}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  // right side button on stack header
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setCount((c) => c + 1)}
          style={{ marginRight: 15, marginTop: 6 }}
        >
          <Ionicons name="search-outline" size={28} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <FlatList data={CATEGORIES} renderItem={renderItemsData} numColumns={2} />
  );
};

// StyleSheet
const Styles = StyleSheet.create({
  itemText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 15,
    shadowColor: "#686868",
    shadowOffset: { width: 5, height: 2 },
    shadowRadius: 15,
    elevation: 3,
    shadowOpacity: 1,
  },
});

export default HomeScreen;
