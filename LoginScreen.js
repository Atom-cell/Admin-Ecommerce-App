import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import SignUpScreen from "./SignUpScreen";

const LoginScreen = ({ nextScreen }) => {
  const [signScreen, setSignScreen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginScreenFunc = () => {
    setSignScreen(false);
  };

  const checkUser = async () => {
    let data = await AsyncStorage.getItem("user");
    let u = JSON.parse(data);
    console.log(u.email);
    console.log(u.password);
    console.log("IP E", email);
    console.log("IP P", password);
    if (email == u.email && password == u.password) {
      nextScreen();
    } else alert("Invalid Credentials");
  };
  if (signScreen) {
    return <SignUpScreen loginScreenFunc={loginScreenFunc} />;
  } else {
    return (
      <>
        <View style={styles.header}>
          <Text style={{ fontSize: 26, fontWeight: "bold" }}>Hello Admin!</Text>
          <TouchableOpacity onPress={() => setSignScreen(true)}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              SIGN UP {<Icon name="arrow-right" size={20} color="black" />}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={{ fontWeight: "bold", fontSize: 28, marginBottom: 35 }}>
            {<Icon name="sign-in" size={28} color="black" />}Login
          </Text>

          <Input
            placeholder=" Email"
            leftIcon={<Icon name="envelope" size={20} />}
            label="Your Email address"
            onChangeText={setEmail}
          />
          <Input
            placeholder="Password"
            leftIcon={<Icon name="lock" size={24} marginRight={10} />}
            label="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
          />
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("http://google.com")}
          >
            Forgot Password?
          </Text>
          <TouchableOpacity
            style={styles.btnWrapper}
            onPress={() => checkUser()}
          >
            <Text style={{ fontWeight: "bold", fontSize: 22 }}>
              Login {<Icon name="arrow-right" size={20} color="black" />}
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    // backgroundColor: "grey",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1B98F5",
    width: "100%",
    height: "10%",
    position: "relative",
    // top: 10,
    padding: 10,
  },
  btnWrapper: {
    backgroundColor: "#1B98F5",
    padding: 10,
    marginTop: 20,
  },
});
