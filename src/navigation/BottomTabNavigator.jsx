import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import CartNavigator from "./CartNavigator";
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import OrdersNavigator from './OrderNavigator'
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTab.Screen
        name="Shop"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="trophy"
              size={30}
              color={focused ? colors.secondary : colors.octavo}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartNav"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="shopping-cart"
              size={24}
              color={focused ? colors.secondary : colors.octavo}
            />
          ),
        }}
      />
      <BottomTab.Screen
      name="OrdersNav"
      component={OrdersNavigator}
      options={{
        tabBarIcon:({focused})=>(
          <Feather
          name='list'
          size={24}
          color={focused ? colors.secondary : colors.octavo}
          />
        )
      }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.decimo,
    borderColor: colors.decimo,
    borderRadius: 70,
    marginTop: "-12%",
  },
});
