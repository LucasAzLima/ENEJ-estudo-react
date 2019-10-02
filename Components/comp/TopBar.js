import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons} from "@expo/vector-icons";

class TopBar extends React.Component{
    render(){
  return (
    
      <View style={styles.ViewSup}>
        <TextInput style={styles.TextInput} placeholder="Pesquise sua palestra" placeholderTextColor="#000000"/>
        <TouchableOpacity>
        <MaterialCommunityIcons style={styles.Ionicons} name='qrcode-scan' size={70} color="#05d1a1"/>
        </TouchableOpacity>
      </View>
  );
}}

const styles = StyleSheet.create({
  TextInput:{
    backgroundColor:"#d8d8d8",
    marginRight:5,
    opacity:0.5,
    flex:1,
    borderRadius:5
  },
  ViewSup:{
    flexDirection:'row',
    marginHorizontal:5,
    justifyContent:"flex-start",
    marginBottom:10,
    marginTop:20
  },
   
});

export default TopBar;