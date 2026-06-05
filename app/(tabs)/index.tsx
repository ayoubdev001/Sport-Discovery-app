import { View, StyleSheet, Text, } from "react-native";
import Homecards from "../../components/homecards";


export default function Index() {
  return (
    

    <View style = {styles.background} >
      <Text style = {styles.text}>Sport Dis<Text style={{color:"#ff0000"}} >covery</Text></Text>
      <View><Text style= {styles.text2}>FIND YOUR NEXT PASSION, EXPLORE LOCAL SPORTS</Text></View>

      <Homecards />

    </View>
  );
}
 const styles= StyleSheet.create({
 text:{
   fontSize:30,
   textAlign: "center",
   fontWeight:"bold"
 },
 text2:{
   fontSize:20,
   textAlign: "center",
   letterSpacing:3,
   color:"#000000",
   
 },

 background:{
  flex:1,
  backgroundColor:"#d8d8d8",
  gap:10,
 },

 })