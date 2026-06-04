import { View, Text, FlatList, Image } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SportsScreen() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetchSports();
  }, []);

  const fetchSports = async () => {
    try {
      const response = await axios.get("https://6a1eea45b79eec0d6cf045d7.mockapi.io/data");
      setSports(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={sports}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 15,
              backgroundColor: "#f3f0f0",
              padding: 10,
              borderRadius: 30,
            }}>

            <Image
              source={{ uri: item.img }}
              style={{ width: "100%", height: 250, borderRadius: 30 }}/>

            <Text style={{ color:"#ff0000", fontSize: 18, fontWeight: "bold", margin:10 }}>
              {item.name}
            </Text>

            <Text style={{margin:10 }}>
              {item.category}</Text>

            <Text style={{margin:10 }}>
              {item.shortDesc}</Text>
          </View>
        )}
      />
    </View>
  );
}