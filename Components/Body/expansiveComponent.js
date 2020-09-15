import React from "react";
import { Text, View, StyleSheet, LayoutAnimation, 
            Platform, UIManager, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

class EC extends React.Component {
    constructor() {
        super();

        this.state = { expanded: false }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    changeLayout = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        const { title, description, color, link } = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} 
                    style={{padding: 10,
                        backgroundColor: color,
                        borderRadius: 5,
                        marginTop: 5,
                        width:350,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignContent: "center"}}>
                        <Text style={styles.btnText}>{title}</Text>
                        <AntDesign 
                        name={this.state.expanded ? "down" : "right"} size={20} />
                    </TouchableOpacity>
                    <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
                        <Text style={styles.text}>
                            {description}
                        </Text>
                        {(link!=='')?<Button title='Ir para...'/>:<View/>}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        alignSelf:'center',
        backgroundColor:"#f0f0f0",
        marginHorizontal: 5,
        marginVertical:10,
        borderRadius:3
    },
    text: {
        fontSize: 17,
        padding: 10,
        backgroundColor: "#f0f0f0",
    },

    btnText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight:'bold',
    },
});

export default EC;