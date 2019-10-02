import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Button } from 'react-native';
import TopBar from "../comp/TopBar";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopBar />
        <TouchableOpacity style={styles.Btn} onPress={() => this.props.navigation.navigate('BodyScreen')}>
          <Text style={{fontWeight:'bold'}}>Palestra1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn}>
          <Text style={{fontWeight:'bold'}}>Palestra</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn}>
          <Text style={{fontWeight:'bold'}}>Palestra</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn}>
          <Text style={{fontWeight:'bold'}}>Palestra</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 10,
  },
  Btn: {
    padding: 10,
    backgroundColor: "#05d1a1",
    borderRadius: 10,
    marginHorizontal:10,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    height:50
  }
});
export default Home;