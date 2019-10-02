import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

class TextInputCustom extends React.Component  {
    render(){
    const {Icon='', text=''} = this.props;
  return (
    <View style={styles.container}>
      <View style={styles.View}>
        <MaterialCommunityIcons name={Icon} color="#05d1a1" size={40} style={{marginLeft:8}}/>
        <TextInput 
        placeholder={text}
        placeholderTextColor="#b3b3b3" 
        style={styles.TextInput}/>
      </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  View: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent:"center",
    borderRadius:40,
    alignSelf:"center",
    alignItems:"center",
    
  },
  TextInput: {
    height: 60,
    marginHorizontal:10,
    
  }
});

export default TextInputCustom;