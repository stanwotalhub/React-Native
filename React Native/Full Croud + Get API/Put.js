import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Formik } from "formik";
import { BaseApi } from "../Constants/BaseApi";
// import Colors from "../../Components/Colors";

const UpdateCountries = ({ navigation, route }) => {
  const { routeId, routeName } = route.params;

  console.log(routeId + "From route id");

  const UpdateCountry = async (name) => {
    const data = await BaseApi.put("Countries/" + routeId, {
      id: routeId,
      name: name,
    });
    console.log(name + "from update Function");
    console.log(data.ok);
    if (data.ok) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name: routeName }}
        onSubmit={(values, actions) => {
          console.log(values.name);

          UpdateCountry(values.name);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              autoFocus
              style={styles.nameInput}
              placeholder="Enter Country Name..."
              onChangeText={props.handleChange("name")}
              value={props.values.name}
              textContentType="countryName"
              onBlur={props.handleBlur("name")}
            />
            <Button
              title="Update"
              onPress={props.handleSubmit}
              // color={(Colors = "#C0C0C0")}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default UpdateCountries;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  nameInput: {
    borderColor: "#C0C0C0",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 22,
    borderRadius: 5,
    marginVertical: 25,
  },
});
