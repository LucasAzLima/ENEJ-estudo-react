import React from "react";
import { Text, View, StyleSheet, Platform, ImageBackground, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
class App extends React.Component {
  state = {
    email: '',
    senha: '',

  };
  

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../pic/enej.png")} style={{ width: "100%", height: 250 }} />
          
        <View style={{marginHorizontal:15, marginTop:20}}>

          <View style={styles.ViewTI}>
            <MaterialCommunityIcons name="email-outline" color="#05d1a1" size={40} style={{ marginLeft: 8 }} />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#b3b3b3"
              style={styles.TextInput2} />
          </View>

          <View style={styles.ViewTI}>
            <MaterialCommunityIcons name="lock-outline" color="#05d1a1" size={40} style={{ marginLeft: 8 }} />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#b3b3b3"
              style={styles.TextInput2} />
          </View>

        </View>
        <View style={{marginHorizontal:15}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <View style={styles.ViewButton}>
              <Text style={{color:"#ffffff", fontWeight:"bold"}}>ENTRAR</Text>
            </View>
          </TouchableOpacity>
{/*           <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupScreen')}>
            <View style={styles.ViewButton}>
              <Text style={{color:"#ffffff", fontWeight:"bold"}}>REGISTRAR</Text>
            </View>
          </TouchableOpacity> */}
          <Text style={{marginLeft:250}} onPress={() => this.props.navigation.navigate('SignupScreen')}>Cadastrar-se</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: "#05d1a1",
    height: "100%"

  },
  ViewButton: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: "#0073e6",
    color:"#fff",
    marginBottom: 5
  },
  View: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    alignSelf:"center",
    backgroundColor: "#05d1a1",
    
    marginTop:20
  },

  ViewTI: {
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 40,
    alignSelf: "center",
    alignItems: "center",
    marginBottom:5,
    width:"100%",

  },
  TextInput2: {
    height: 60,
    marginHorizontal: 10,
  },

});

export default App;