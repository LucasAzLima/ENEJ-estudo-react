import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Button } from 'react-native';
import TopBar from "../comp/TopBar";

class Home extends React.Component {
  
  state = {
    names: [
       {
          id: 0,
          name: 'React JS',
       },
       {
          id: 1,
          name: 'React native',
       },
       {
          id: 2,
          name: 'Python',
       },
       {
          id: 3,
          name: 'JavaScript',
       }
    ]
 }
  render() {
    return (
      <View style={styles.container}>
        <TopBar />
        {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.list}
                     onPress={() => this.props.navigation.navigate('BodyScreen')}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
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
    marginHorizontal: 10,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50
  },
  list: {
    padding: 10,
    marginTop: 5,
    backgroundColor: '#05d1a1',
    alignItems: 'center',
    borderRadius:5,
    marginHorizontal:5
 },
 text: {
    color: '#fff',
    fontWeight:"bold"
    
 }
});
export default Home;