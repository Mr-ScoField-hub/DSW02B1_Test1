import React, { useCallback } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import CommunityScreen from "./screens/CommunityScreen";
import SOSScreen from "./screens/SosScreen";
import LearningScreen from "./screens/Learning/LearningScreen";
import TherapistScreen from "./screens/TherapistScreen";
import HealthScreen from "./screens/HealthScreen";
import GameScreen from "./screens/Learning/Game";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Colors & Tab Bar constants
const COLORS = { ACTIVE: "#de0973ff", INACTIVE: "gray" };
const TAB_BAR = { HEIGHT: 60, PADDING: 5 };

// Bottom Tab Configuration
const TABS = [
  {
    name: "Home",
    component: HomeScreen,
    icons: { active: "home", inactive: "home-outline" },
    accessibilityLabel: "Home Screen",
  },
  {
    name: "Newsfeed",
    component: CommunityScreen,
    icons: { active: "newspaper", inactive: "newspaper-outline" },
    accessibilityLabel: "Newsfeed Screen",
  },
  {
    name: "SOS",
    component: SOSScreen,
    icons: { active: "alert-circle", inactive: "alert-circle-outline" },
    accessibilityLabel: "SOS Screen",
  },
  {
    name: "Learning",
    component: LearningScreen,
    icons: { active: "book", inactive: "book-outline" },
    accessibilityLabel: "Learning Screen",
  },
  {
    name: "Therapist",
    component: TherapistScreen,
    icons: { active: "chatbubbles", inactive: "chatbubbles-outline" },
    accessibilityLabel: "Therapist Screen",
  },
];

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    height: TAB_BAR.HEIGHT,
    paddingBottom: TAB_BAR.PADDING,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
});

// Tab Bar Icon Renderer
const getTabBarIcon = ({ route, focused, color, size }) => {
  const tabConfig = TABS.find((tab) => tab.name === route.name);
  const icon = tabConfig?.icons || {
    active: "alert",
    inactive: "alert-outline",
  };
  return (
    <Ionicons
      name={focused ? icon.active : icon.inactive}
      size={size}
      color={color}
    />
  );
};

// Bottom Tabs Navigator
const TabsNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) =>
        getTabBarIcon({ route, focused, color, size }),
      tabBarActiveTintColor: COLORS.ACTIVE,
      tabBarInactiveTintColor: COLORS.INACTIVE,
      tabBarStyle: styles.tabBar,
      tabBarLabelStyle: { fontSize: 12, fontWeight: "500" },
      tabBarItemStyle: { paddingVertical: 5 },
      lazy: true,
    })}
  >
    {TABS.map((tab) => (
      <Tab.Screen
        key={tab.name}
        name={tab.name}
        component={tab.component}
        options={{
          tabBarAccessibilityLabel: tab.accessibilityLabel,
          unmountOnBlur: true,
        }}
      />
    ))}
  </Tab.Navigator>
);

// Root Stack Navigator
const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabsNavigator} />
      <Stack.Screen name="Health" component={HealthScreen} />
      <Stack.Screen name="Game" component={GameScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
