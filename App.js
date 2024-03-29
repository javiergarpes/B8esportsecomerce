import { useFonts } from "expo-font";
import fonts from "./src/global/fonts";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { Provider } from "react-redux";
import store from "./src/store";
import Login from "./src/screens/Login/Login";
import { Signup } from "./src/screens";
import MainNavigator from "./src/navigation/MainNavigator";
import { init } from "./src/db";

init()
  .then(() => {
    console.log("DB initialized");
  })
  .catch((err) => {
    console.log("DB failed to initialize", err.message);
  });

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}
