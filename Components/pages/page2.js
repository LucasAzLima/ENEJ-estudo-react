import React from 'react';
import { StyleSheet,View } from 'react-native';
import TopBar from "../comp/TopBar";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
      backgroundColor:"#00ff00",
    justifyContent: 'center',
    marginTop: 10,
    width:"100%",
    height:"100%"
  },

});
export default Home;