import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

const ListScreen = ({ navigation, route }) => {
  const { list } = route.params;
  const { type } = route.params;

  React.useLayoutEffect(() =>
    type === "prod"
      ? navigation.setOptions({ title: "Products List" })
      : type === "emp"
      ? navigation.setOptions({ title: "Employees List" })
      : type === "order"
      ? navigation.setOptions({ title: "Orders List" })
      : null
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Details", { obj: item, type: type })
            }
            style={styles.item}
          >
            {type == "prod" ? (
              <>
                <Text style={{ fontSize: 25, marginVertical: 8 }}>
                  Item Name: {item.name}
                </Text>
                <Image source={{ uri: item.img }} style={styles.img} />
              </>
            ) : type == "emp" ? (
              <>
                <Text style={{ fontSize: 25, marginVertical: 8 }}>
                  Employee Name: {item.name}
                </Text>
                <Text style={{ fontSize: 25, marginVertical: 8 }}>
                  Designation: {item.designation}
                </Text>
              </>
            ) : type == "order" ? (
              <>
                <Text style={{ fontSize: 25, marginVertical: 8 }}>
                  Order Number: {item.ONumber}
                </Text>
                <Text style={{ fontSize: 25, marginVertical: 8 }}>
                  Item Name: {item.name}
                </Text>
                <Text style={{ fontSize: 25, marginVertical: 8 }}>
                  Price: {item.price}
                </Text>
              </>
            ) : null}
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <View>
            <Text>No Data Available</Text>
          </View>
        }
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  item: {
    borderWidth: 1,
    padding: 20,
    // paddingHorizontal: 100,
    margin: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 200,
    height: 200,
  },
});
