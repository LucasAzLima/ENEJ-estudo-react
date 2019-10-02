import React from "react";
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";


class App extends React.Component {
  state = {
    email: '',
    senha: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginHorizontal: 15 }}>
          <View style={styles.ViewTI}>
            <AntDesign name="user" color="#05d1a1" size={40} style={{ marginLeft: 8 }} />
            <TextInput
              placeholder="Nome"
              placeholderTextColor="#b3b3b3"
              style={styles.TextInput2} />
          </View>

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
        <View style={{ marginHorizontal: 15 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupScreen')}>
            <View style={styles.ViewButton}>
              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>REGISTRAR</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  ViewTI: {
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 40,
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 5,
    width: "100%",


  },
  TextInput2: {
    height: 60,
    marginHorizontal: 10,
  },
  container: {
    backgroundColor: "#05d1a1",
    height: "100%",
    justifyContent: "center"
  },
  ViewButton: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: "#0073e6",
    color: "#fff",
    marginBottom: 5
  },
});

export default App;