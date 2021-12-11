import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Avatar } from "react-native-elements";

const DetailsScreen = ({ navigation, route }) => {
  const { obj } = route.params;
  const { type } = route.params;

  React.useLayoutEffect(() =>
    type === "prod"
      ? navigation.setOptions({ title: obj.name })
      : type === "emp"
      ? navigation.setOptions({ title: obj.name })
      : type === "order"
      ? navigation.setOptions({ title: obj.ONumber })
      : null
  );
  return (
    <View style={styles.container}>
      {type === "prod" ? (
        <>
          <Avatar
            rounded
            size="xlarge"
            source={{
              uri: obj.img,
            }}
          />
          <Text style={styles.txt}>Name:{obj.name}</Text>
          <Text style={styles.txt}>Price:{obj.price}</Text>
          <Text style={styles.txt}>Quantity: {obj.qty}</Text>
        </>
      ) : type === "emp" ? (
        <>
          <Avatar
            rounded
            size="xlarge"
            source={{
              uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
            }}
          />
          <Text style={styles.txt}>Name: {obj.name}</Text>
          <Text style={styles.txt}>Designation: {obj.designation}</Text>
          <Text style={styles.txt}>Age: {obj.age}</Text>
          <Text style={styles.txt}>Hire Date: {obj.hireDate}</Text>
        </>
      ) : (
        <>
          <Text style={styles.txt}>Order Number:{obj.ONumber}</Text>
          <Text style={styles.txt}>Price:{obj.price}</Text>
          <Text style={styles.txt}>Quantity: {obj.qty}</Text>
          <Text style={styles.txt}>Customer Name: {obj.CName}</Text>
          <Text style={styles.txt}>Customer Phone: {obj.CNum}</Text>
          <Text style={styles.txt}>Customer Address: {obj.CAddress}</Text>
          <Text style={styles.txt}>Order Date: {obj.ODate}</Text>
          <Text style={styles.txt}>Status: {obj.status}</Text>
        </>
      )}
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  img: {
    width: 400,
    height: 400,
  },
  txt: {
    fontSize: 25,
    marginVertical: 5,
  },
});
