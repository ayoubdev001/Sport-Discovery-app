import {Text, Image, ScrollView, ActivityIndicator, StyleSheet,} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import axios from "axios";

type Sport = {
  id: number;
  name: string;
  category: string;
  img: string;
  shortDesc: string;
  description: string;
  rules: string[];
  equipment: string[];
  gallery: string[];
};

export default function SportDetails() {
  const { id } = useLocalSearchParams();

  const [sport, setSport] = useState<Sport | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSport();
  }, [id]);

  const fetchSport = async () => {
    try {
      const response = await axios.get(
        "https://6a1eea45b79eec0d6cf045d7.mockapi.io/data"
      );

      const foundSport = response.data.find(
        (item: Sport) => item.id.toString() === id
      );

      setSport(foundSport || null);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!sport) {
    return <Text>No sport found</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: sport.img }} style={styles.image} />

      <Text style={styles.title}>{sport.name}</Text>

      <Text style={styles.text}>{sport.category}</Text>

      <Text style={styles.text}>Description</Text>

      <Text style={styles.text}>{sport.description}</Text>

      <Text style={styles.sectionTitle}>Equipment</Text>

      {sport.equipment.map((item, index) => (
        <Text key={index} style={styles.listItem}>
          • {item}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>Rules</Text>

      {sport.rules.map((rule, index) => (
        <Text key={index} style={styles.listItem}>
          • {rule}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 5,
  },
  image: {
    width: "100%",
    height: 400,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 70,
  },
  title: {
    color:"#800000",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign:"center",
  },
  sectionTitle: {
    color:"#ff0000",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
    textAlign:"center",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign:"center",
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
    textAlign:"center",
  },
});