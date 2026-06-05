import { View, Text, FlatList, Image, Pressable, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { router } from "expo-router";

export default function HomeCards() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetchSports();
  }, []);

  const fetchSports = async () => {
    try {
      const response = await axios.get(
        "https://6a1eea45b79eec0d6cf045d7.mockapi.io/data"
      );

      setSports(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderSport = ({ item }) => (
    <Pressable onPress={() => router.push(`/sports/${item.id}`)}>
      <View style={styles.card}>
        <Image source={{ uri: item.img }} style={styles.image} />

        <Text style={styles.name}>
          {item.name}
        </Text>

        <Text style={styles.category}>
          {item.category}
        </Text>

        <Text style={styles.description}>
          {item.shortDesc}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={sports}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderSport}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  card: {
    marginBottom: 15,
    backgroundColor: "#f3f0f0",
    padding: 10,
    borderRadius: 30,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 30,
  },
  name: {
    color: "#ff0000",
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  category: {
    marginHorizontal: 10,
    marginBottom: 5,
  },
  description: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
});