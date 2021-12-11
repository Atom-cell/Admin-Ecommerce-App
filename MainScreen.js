import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { productList, employeesList, ordersList } from "./Data";
const MainScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom: 20 }}>
        Dashboard
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("List", { list: productList, type: "prod" });
        }}
        style={styles.wrapper0}
      >
        <View style={styles.wrapper1}>
          <Text style={styles.txt}> Manage Products </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("List", { list: employeesList, type: "emp" })
        }
        style={styles.wrapper0}
      >
        <View style={styles.wrapper1}>
          <Text style={styles.txt}> Manage Employees </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("List", { list: ordersList, type: "order" })
        }
        style={styles.wrapper0}
      >
        <View style={styles.wrapper1}>
          <Text style={styles.txt}> Manage Orders </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  wrapper: {
    flexDirection: "row",
    padding: 30,
    backgroundColor: "grey",
    justifyContent: "space-between",
    width: "80%",
    margin: 5,
    borderRadius: 10,
  },
  wrapper0: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    borderWidth: 2,
    width: "80%",
    margin: 10,
    borderRadius: 10,
  },
  wrapper1: {
    flexDirection: "row",
    padding: 30,
    backgroundColor: "white",
    justifyContent: "space-between",
    width: "100%",
    // margin:5,
    borderRadius: 10,
  },
  txt: {
    fontSize: 25,
  },
  inputs: {
    padding: 20,
    fontSize: 15,
    borderWidth: 0.5,
    width: "80%",
    borderRadius: 30,
    margin: 5,
  },
  addBtn: {
    padding: 20,
    backgroundColor: "grey",
    fontSize: 20,
    borderRadius: 30,
  },
});

{
  /* <TouchableOpacity style={styles.}>
        <Text>Manage Products</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Manage Employees</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Manage Orders</Text>
      </TouchableOpacity> */
}
