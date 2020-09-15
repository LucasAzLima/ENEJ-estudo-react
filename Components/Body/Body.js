import React from "react";
import { Text, View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
import ExpansiveC from "./expansiveComponent"
class App extends React.Component {

  render() {
    const { description, palestrante, local } = this.props;
    return (
      <View style={styles.container}>
        <ExpansiveC title={"Descrição"} description={"Aqui será colocada a descrição sobre a palestra"} />
        <ExpansiveC title={"Palestrante"} description={"Fulano : latters"} />
        <ExpansiveC title={"Local"} description={"Sala X"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    marginTop:20
  },

});

export default App;