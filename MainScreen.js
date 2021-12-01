import { BaseNavigationContainer } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MainScreen = ({ navigation, route }) => {
  const productList = [
    {
      name: "Tea",
      price: 150,
      qty: 100,
      img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80",
      id: Math.random(),
    },
    {
      name: "Coffee",
      price: 400,
      qty: 100,
      img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      id: Math.random(),
    },
    {
      name: "Chocolate",
      price: 300,
      qty: 33,
      img: "https://images.unsplash.com/photo-1591754550580-890a9016b687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      id: Math.random(),
    },
  ];
  const employeesList = [
    {
      name: "Ali Khan",
      age: 30,
      designation: "Clerk",
      id: Math.random(),
      hireDate: "1 Jan 2020",
    },
    {
      name: "Ahsan Ali",
      age: 20,
      designation: "Manager",
      id: Math.random(),
      hireDate: "12 March 2019",
    },
    {
      name: "Ali Asif",
      age: 30,
      designation: "Clerk",
      id: Math.random(),
      hireDate: "9 July 2021",
    },
  ];

  const ordersList = [
    {
      ONumber: 12,
      name: "Coffee",
      qty: 1,
      price: 400,
      CName: "Mr Khan",
      CNum: "088878781",
      CAddress: "G12 H12 ISB",
      ODate: "21 Feb 2020",
      status: "In Progress",
    },
    {
      ONumber: 2,
      name: "Coffee",
      qty: 2,
      price: 800,
      CName: "Mr Javed",
      CNum: "088878787",
      CAddress: "X12 Z12 ISB",
      ODate: "21 June 2021",
      status: "Delivered",
    },
    {
      ONumber: 10,
      name: "Tea",
      qty: 2,
      price: 300,
      CName: "Adeel Zahid",
      CNum: "0101010",
      CAddress: "H-22 RWP",
      ODate: "1 Jan 2020",
      status: "In Progress",
    },
  ];
  return (
    <View style={styles.container}>
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
