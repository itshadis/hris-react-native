import { FontAwesome6, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { ReactNode } from "react";
import { View } from "react-native";

const TabIcon = ({ icon, focused }: { icon: ReactNode, focused: boolean }) => {
  return (
    <View className="flex-1 mt-3 flex flex-col items-center">
      {icon}
    </View>
  )
}

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index"
        options={{ 
          title: "Home", 
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={<Ionicons name="home" size={16} color={focused ? "#007aff" : ""} />} />
          )
        }}
      />
      <Tabs.Screen 
        name="history" 
        options={{ 
          title: "History", 
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={<MaterialIcons name="history" size={16} className="" color={focused ? "#007aff" : ""} />} />
          )
        }}
      />
      <Tabs.Screen 
        name="employee" 
        options={{ 
          title: "Employee", 
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={<FontAwesome6 name="users-line" size={16} color={focused ? "#007aff" : ""} />}/>
          )
        }}
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: "Profile", 
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={<FontAwesome6 name="user-gear" size={16} color={focused ? "#007aff" : ""} />} />
          )
        }}
      />
    </Tabs>
  );
}
