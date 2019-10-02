import React from "react";
import { Text, View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
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
        const { title, description } = this.props;
        return (
            <View style={styles.container}>
                <View >
                    <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={styles.Btn}>
                        <Text style={styles.btnText}>{title}</Text>
                        <AntDesign name={this.state.expanded ? "caretdown" : "caretright"} size={25} />
                    </TouchableOpacity>
                    <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
                        <Text style={styles.text}>
                            {description}
                        </Text>
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
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    text: {
        fontSize: 17,
        color: 'black',
        padding: 10,
        backgroundColor: "#d8d8d8"
    },

    btnText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },

    Btn: {
        padding: 10,
        backgroundColor: "#05d1a1",
        borderRadius: 5,
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default EC;