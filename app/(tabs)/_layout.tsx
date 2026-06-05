import { Tabs,  } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
  return (
    
    <Tabs>
      
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "favorite",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" size={24} color="black" />
            
          ),
        }}
      />
    </Tabs>
  );
}