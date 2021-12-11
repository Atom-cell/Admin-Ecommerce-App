import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";

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
    <View>
      <FlatList
        data={list}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Details", { obj: item, type: type })
            }
            // style={styles.item}
          >
            {type == "prod" ? (
              <ListItem bottomDivider>
                <Avatar rounded size="medium" source={{ uri: item.img }} />
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            ) : // <>
            //   <Text style={{ fontSize: 25, marginVertical: 8 }}>
            //     Item Name: {item.name}
            //   </Text>
            //   <Image source={{ uri: item.img }} style={styles.img} />
            // </>
            type == "emp" ? (
              // <>
              //   <Text style={{ fontSize: 25, marginVertical: 8 }}>
              //     Employee Name: {item.name}
              //   </Text>
              //   <Text style={{ fontSize: 25, marginVertical: 8 }}>
              //     Designation: {item.designation}
              //   </Text>
              // </>
              <ListItem bottomDivider>
                <Avatar
                  rounded
                  source={{
                    uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                  <ListItem.Subtitle>{item.designation}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            ) : type == "order" ? (
              // <>
              //   <Text style={{ fontSize: 25, marginVertical: 8 }}>
              //     Order Number: {item.ONumber}
              //   </Text>
              //   <Text style={{ fontSize: 25, marginVertical: 8 }}>
              //     Item Name: {item.name}
              //   </Text>
              //   <Text style={{ fontSize: 25, marginVertical: 8 }}>
              //     Price: {item.price}
              //   </Text>
              // </>
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={{ fontWeight: "bold" }}>
                    {item.ONumber}
                  </ListItem.Title>
                  <ListItem.Title>{item.name}</ListItem.Title>

                  <ListItem.Subtitle>{item.price}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
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
