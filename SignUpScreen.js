import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

const SignUpScreen = ({ loginScreenFunc }) => {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const makeUser = async () => {
    let user = {
      email: email,
      username: username,
      password: password,
    };
    await AsyncStorage.setItem("user", JSON.stringify(user));
    loginScreenFunc();
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 28, marginBottom: 35 }}>
        Sign Up
      </Text>

      <Input
        placeholder=" Email"
        leftIcon={<Icon name="envelope" size={20} />}
        label="Your Email address"
        onChangeText={setEmail}
      />
      <Input
        placeholder=" Username"
        leftIcon={<Icon name="user-circle-o" size={20} />}
        label="Your User Name"
        onChangeText={setUsername}
      />
      <Input
        placeholder="Password"
        leftIcon={<Icon name="lock" size={24} marginRight={10} />}
        label="Password"
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.btnWrapper} onPress={() => makeUser()}>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    // backgroundColor: "grey",
    padding: 15,
  },
  btnWrapper: {
    backgroundColor: "#1B98F5",
    padding: 10,
    marginTop: 20,
  },
});
