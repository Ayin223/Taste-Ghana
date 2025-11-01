import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name = "home"
        options ={{
          //headerShown: false,
          title: "Recipes",
          tabBarIcon: (({color, size}) => <Ionicons name ="restaurant" size = {size} color ={color}/>)
        }}
      />
      <Tabs.Screen
        name = "favorite"
        options ={{
          title: "favorite",
          tabBarIcon: (({color, size}) => <Ionicons name ="heart" size = {size} color ={color}/>)
        }}
      />
      <Tabs.Screen
        name = "profile"
        options ={{
          title: "Profile",
          tabBarIcon: (({color, size}) => <Ionicons name ="person" size = {size} color ={color}/>)
        }}
      />
    </Tabs>
);
}
