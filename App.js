import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./MainScreen";
import ListScreen from "./ListScreen";
import DetailsScreen from "./DetailsScreen";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
const Stack = createNativeStackNavigator();

function App() {
  const [log, setLog] = React.useState(false);

  const nextScreen = () => {
    setLog(true);
  };
  if (log) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <LoginScreen nextScreen={nextScreen} />;
  }
}

export default App;
