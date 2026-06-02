import { ScrollView, StyleSheet, Text, } from "react-native";
import Home from "./home"

export default function Index() {
  return (
    <ScrollView style = {styles.background} >
      <Text style = {styles.text}>Sport Dis<Text style={{color:"#ff0000"}} >covery</Text></Text>

      <Home/>

    </ScrollView>
  );
}
 const styles= StyleSheet.create({
 text:{
   fontSize:30,
   textAlign: "center",
   fontWeight:"bold"
 },

 background:{
  backgroundColor:"#d8d8d8",
 }

 })