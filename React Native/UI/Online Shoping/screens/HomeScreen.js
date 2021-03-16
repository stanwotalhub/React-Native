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

import Swiper from "react-native-swiper";

import { Ionicons, AntDesign } from "@expo/vector-icons";
import { ProgressBar, Colors } from "react-native-paper";

//Render

const ScrollableTab = ({ tabList, selectedTab, onPress }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onPress(item)}>
      {/* MAIN VIEW */}

      <View
        style={{
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      >
        <Image
          style={{ height: "78%", borderRadius: 10, width: 70 }}
          source={{ uri: item.catimg }}
          resizeMode="cover"
        />

        {/* CAT VIEW */}

        <View
          style={{
            flexShrink: 1,
            height: "22%",
            width: 70,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              flexShrink: 1,
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            {/* CAT NAME */}

            {item.name}
          </Text>

          {/* CAT INDICATER */}

          {selectedTab.id == item.id && (
            <View
              style={{
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 2,
                  borderRadius: 5,
                  backgroundColor: "#42B0FF",
                }}
              ></View>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      {/* CAT FLATLIST */}

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={tabList}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        horizontal={true}
        style={{
          marginTop: "5%",
          height: 118,
          alignSelf: "center",
          width: "90%",
        }}
        ItemSeparatorComponent={() => (
          <View style={{ width: 24, height: "100%", borderWidth: 0 }}></View>
        )}
      />
    </View>
  );
};
// RENDER ITEMS 2 ( PRODUCT )
const ScrollableCard = ({ navigation, productList }) => {
  const renderCard = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ComponentsScreen", { itemInfo: item })
      }
    >
      {/* MAIN PRODUCT VIEW */}

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
            source={{ uri: item.image }}
          />
          {/* <Text> {item.image} </Text> */}
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
            >
              {" "}
              {item.productName}{" "}
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
              {" "}
              {item.by}
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
            >
              {item.star}
            </Text>
            <Text
              style={{
                flexShrink: 1,
                marginLeft: "2%",
                color: "#808080",
              }}
            >
              {item.review}
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
            >
              {item.price}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        // scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={productList}
        renderItem={renderCard}
        keyExtractor={(item) => `${item.productId}`}
        style={{
          // marginLeft: 20,
          height: "100%",
          width: "100%",
          marginTop: "5%",
          marginRight: 0,
        }}
        ItemSeparatorComponent={() => (
          <View style={{ width: 13, borderWidth: 0 }}></View>
        )}
      />
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const [tabList, setTabList] = React.useState([
    {
      id: 0,
      name: "Home",
      title: "Home",
      catimg:
        "https://image.freepik.com/free-vector/cute-astronaut-box-cartoon-icon-illustration-science-technology-concept-flat-cartoon-style_138676-1998.jpg",
      productList: [
        {
          productId: 1,
          productName: "HRX by Hrithik Roshan Shose",
          by: "Men White & Black Board Life Sneakers",
          star: "3.9",
          price: "Rs. 1899.00",
          review: "(204 Review)",
          image:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4253222/2018/7/3/e8aee672-45fb-4a9e-ae4d-153db0bbd0541530622267200-HRX-by-Hrithik-Roshan-Men-Casual-Shoes-1591530622267027-1.jpg",
        },
        {
          productId: 2,
          productName: "HERE&NOW",
          by: "Men Black Printed Round Neck T-shirt",
          star: "2.5",
          price: "Rs. 315.00",
          review: "(24 Review)",
          image:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4318138/2018/5/4/11525433792765-HERENOW-Men-Black-Printed-Round-Neck-T-shirt-2881525433792598-1.jpg",
        },
        {
          productId: 3,
          productName: "HRX by Hrithik Roshan",
          by: "Men Yellow Printed Round Neck T-Shirt",
          star: "4.2",
          price: "Rs. 384.00",
          review: "(69 Review)",
          image:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700944/2019/6/8/972c9498-3a37-4d5d-976c-4493b4d5c0021559989322793-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--1.jpg",
        },
        {
          productId: 4,
          productName: "LOCOMOTIVE",
          by: "Men Olive Green Solid Tailored Jacket",
          star: "3.9",
          price: "Rs. 1459.00",
          review: "(204 Review)",
          image:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/11/19/cdacf83e-c9fe-4c73-bdcd-80353cf0bc8c1574187371673-1.jpg",
        },
        {
          productId: 5,
          productName: "KASSUALLY",
          by: "Women Black Solid Peplum Top",
          star: "3.9",
          price: "Rs. 701.00",
          review: "(204 Review)",
          image:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/6/9/aae6d5da-cee2-4fdf-99cd-b5421d86d68a1591654989641-1.jpg",
        },
        {
          productId: 6,
          productName: "Golden Peacock",
          by: "Women Off White & Pink Woven-Design Straw Sun Hat",
          star: "3.9",
          price: "Rs. 849.00",
          review: "(204 Review)",
          image:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/9/8ac8d104-b506-4803-8a8f-36201497be741612888063171-1.jpg",
        },
        {
          productId: 7,
          productName: "Gambit Black x MN",
          by: "VENDOR: MEDIUM | GEOMATRIX",
          star: "3.9",
          price: "Rs. 1499.00",
          review: "(204 Review)",
          image:
            "https://cdn.shopify.com/s/files/1/2570/3440/products/4_3b08d1d6-b130-4693-87b5-8e6e69738843_900x.png?v=1569482120",
        },
      ],
    },
    {
      id: 1,
      catimg:
        "https://image.freepik.com/free-photo/fashion-male-sport-shoes-blue-background-stylish-man-sneakers-fitness-close-up_77190-1693.jpg",
      name: "Shose",
      title: "Shose",
      productList: [
        {
          productId: 1,
          productName: "HRX by Hrithik Roshan Shose",
          by: "Men White & Black Board Life Sneakers",
          star: "3.9",
          price: "Rs. 1899.00",
          review: "(204 Review)",
          image:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4253222/2018/7/3/e8aee672-45fb-4a9e-ae4d-153db0bbd0541530622267200-HRX-by-Hrithik-Roshan-Men-Casual-Shoes-1591530622267027-1.jpg",
        },
      ],
    },
    {
      id: 2,
      catimg:
        "https://image.freepik.com/free-psd/sports-shirt-mockup-with-brand-logo_23-2148126781.jpg",
      name: "T-Shirt",
      title: "T-Shirt",
      image:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4318138/2018/5/4/11525433792765-HERENOW-Men-Black-Printed-Round-Neck-T-shirt-2881525433792598-1.jpg",

      title: "T-Shirt",
      productList: [
        {
          productId: 2,
          productName: "HERE&NOW",
          by: "Men Black Printed Round Neck T-shirt",
          star: "2.5",
          price: "Rs. 315.00",
          review: "(24 Review)",
          image:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4318138/2018/5/4/11525433792765-HERENOW-Men-Black-Printed-Round-Neck-T-shirt-2881525433792598-1.jpg",
        },
        {
          productId: 3,
          productName: "HRX by Hrithik Roshan",
          by: "Men Yellow Printed Round Neck T-Shirt",
          star: "4.2",
          price: "Rs. 384.00",
          review: "(69 Review)",
          image:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700944/2019/6/8/972c9498-3a37-4d5d-976c-4493b4d5c0021559989322793-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--1.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Jacket",
      title: "Jacket",
      catimg:
        "https://image.freepik.com/free-psd/man-wearing-hoodie-mockup_125540-549.jpg",
      productList: [
        {
          productId: 4,
          productName: "LOCOMOTIVE",
          by: "Men Olive Green Solid Tailored Jacket",
          star: "3.9",
          price: "Rs. 1459.00",
          review: "(204 Review)",
          image:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/11/19/cdacf83e-c9fe-4c73-bdcd-80353cf0bc8c1574187371673-1.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Top",
      title: "Top",
      catimg:
        "https://image.freepik.com/free-photo/spectacular-curly-woman-doing-exercises-with-small-dumbbells_197531-16566.jpg",
      productList: [
        {
          productId: 5,
          productName: "KASSUALLY",
          by: "Women Black Solid Peplum Top",
          star: "3.9",
          price: "Rs. 701.00",
          review: "(204 Review)",
          image:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/6/9/aae6d5da-cee2-4fdf-99cd-b5421d86d68a1591654989641-1.jpg",
        },
      ],
    },
    {
      id: 5,
      catimg:
        "https://image.freepik.com/free-photo/professional-male-chef-cook-white-uniform-cook-hat-crossing-hands-showing-thumbs-up-looking-confident-standing-pink-background_141793-20741.jpg",
      name: "Hat",
      title: "Hat",
      productList: [
        {
          productId: 6,
          productName: "Golden Peacock",
          by: "Women Off White & Pink Woven-Design Straw Sun Hat",
          star: "3.9",
          price: "Rs. 849.00",
          review: "(204 Review)",
          image:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/9/8ac8d104-b506-4803-8a8f-36201497be741612888063171-1.jpg",
        },
      ],
    },
    {
      id: 6,
      name: "Glasses",
      title: "Glasses",
      catimg:
        "https://image.freepik.com/free-photo/close-up-photo-inspired-trendy-lady-sparkle-glasses-looking-up-with-mouth-open_197531-7099.jpg",
      productList: [
        {
          productId: 7,
          productName: "Gambit Black x MN",
          by: "VENDOR: MEDIUM | GEOMATRIX",
          star: "3.9",
          price: "Rs. 1499.00",
          review: "(204 Review)",
          image:
            "https://cdn.shopify.com/s/files/1/2570/3440/products/4_3b08d1d6-b130-4693-87b5-8e6e69738843_900x.png?v=1569482120",
        },
      ],
    },
  ]);

  const [selectedTab, setSelectedTab] = React.useState({
    id: 0,
    name: "Home",
    title: "Home",
    productList: [
      {
        productId: 1,
        productName: "HRX by Hrithik Roshan Shose",
        by: "Men White & Black Board Life Sneakers",
        star: "3.9",
        price: "Rs. 1899.00",
        review: "(204 Review)",
        image:
          "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4253222/2018/7/3/e8aee672-45fb-4a9e-ae4d-153db0bbd0541530622267200-HRX-by-Hrithik-Roshan-Men-Casual-Shoes-1591530622267027-1.jpg",
      },
      {
        productId: 3,
        productName: "HERE&NOW",
        by: "Men Black Printed Round Neck T-shirt",
        star: "2.5",
        price: "Rs. 315.00",
        review: "(24 Review)",
        image:
          "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4318138/2018/5/4/11525433792765-HERENOW-Men-Black-Printed-Round-Neck-T-shirt-2881525433792598-1.jpg",
      },
      {
        productId: 4,
        productName: "HRX by Hrithik Roshan",
        by: "Men Yellow Printed Round Neck T-Shirt",
        star: "4.2",
        price: "Rs. 384.00",
        review: "(69 Review)",
        image:
          "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700944/2019/6/8/972c9498-3a37-4d5d-976c-4493b4d5c0021559989322793-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--1.jpg",
      },
      {
        productId: 5,
        productName: "LOCOMOTIVE",
        by: "Men Olive Green Solid Tailored Jacket",
        star: "3.9",
        price: "Rs. 1459.00",
        review: "(204 Review)",
        image:
          "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/11/19/cdacf83e-c9fe-4c73-bdcd-80353cf0bc8c1574187371673-1.jpg",
      },
      {
        productId: 6,
        productName: "KASSUALLY",
        by: "Women Black Solid Peplum Top",
        star: "3.9",
        price: "Rs. 701.00",
        review: "(204 Review)",
        image:
          "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/6/9/aae6d5da-cee2-4fdf-99cd-b5421d86d68a1591654989641-1.jpg",
      },
      {
        productId: 7,
        productName: "Golden Peacock",
        by: "Women Off White & Pink Woven-Design Straw Sun Hat",
        star: "3.9",
        price: "Rs. 849.00",
        review: "(204 Review)",
        image:
          "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/9/8ac8d104-b506-4803-8a8f-36201497be741612888063171-1.jpg",
      },
      {
        productId: 8,
        productName: "Gambit Black x MN",
        by: "VENDOR: MEDIUM | GEOMATRIX",
        star: "3.9",
        price: "Rs. 1499.00",
        review: "(204 Review)",
        image:
          "https://cdn.shopify.com/s/files/1/2570/3440/products/4_3b08d1d6-b130-4693-87b5-8e6e69738843_900x.png?v=1569482120",
      },
    ],
  });
  // render() {

  function renderTitle(title) {
    return (
      <View style={{ marginVertical: "3%" }}>
        <Text style={{ fontWeight: "bold", marginLeft: 20, fontSize: 20 }}>
          {title}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      {/* {renderHeader()} */}

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* SLIDER VIEW */}

        <View style={styles.sliderContainer}>
          <Swiper
            autoplayTimeout={5}
            autoplay
            activeDotColor="#f1f1f1"
            height={200}
          >
            {/* IMAGE 1 */}

            <View style={styles.slid}>
              <Image
                source={require("../assets/shop4.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>

            {/* IMAGE 2 */}

            <View style={styles.slid}>
              <Image
                source={require("../assets/shop2.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>

            {/* IMAGE 3 */}

            <View style={styles.slid}>
              <Image
                source={require("../assets/shop5.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>

        {/* SIMPLE VIEW */}

        <View style={{ marginTop: "3%", flexDirection: "row" }}>
          {/* <Text style={{ color:"#ABAFBB", fontSize: 20, marginLeft: 20 }}> */}
          {/* Selected: */}
          {/* </Text> */}
          <View>{renderTitle(selectedTab.name)}</View>
        </View>

        <ScrollableTab
          // style={{borderColor:16,borderColor:"black",backgroundColor:"black"}}
          tabList={tabList}
          selectedTab={selectedTab}
          onPress={(item) => setSelectedTab(item)}
        />

        <View style={{ flex: 1 }}>
          <ScrollableCard
            navigation={navigation}
            productList={selectedTab.productList}
          />
        </View>

        {/* FLAT VIST VIEW 2 */}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
// }

// export default HomeScreen;

const styles = StyleSheet.create({
  continue: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: "90%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },
  wraper: {},
  slid: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    borderRadius: 8,
  },
});

export default HomeScreen;
