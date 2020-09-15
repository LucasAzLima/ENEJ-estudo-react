import { View, Text } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import EC from '../Body/expansiveComponent'
class Teste extends React.Component {
    render() {
        const list = [
            {
                title: 'Anim pariatur cliche reprehenderit1',
                text: "Anim pariatur cliche reprehenderit,enim eiusmod high life accusamus terry richardson ad squid.Nihilanim keffiyeh helvetica, craft beer labore wes anderson crednesciunt sapiente ea proident.",
                color:"#16daac",
                link:""
            },
            {
                title: 'Anim pariatur cliche reprehenderit2',
                text: "Anim pariatur cliche reprehenderit,enim eiusmod high life accusamus terry richardson ad squid.Nihilanim keffiyeh helvetica, craft beer labore wes anderson crednesciunt sapiente ea proident.",
                color:"#87cefa",
                link:'disidhishdhsid'
            },
            {
                title: 'Anim pariatur cliche reprehenderit3',
                text: "Anim pariatur cliche reprehenderit,enim eiusmod high life accusamus terry richardson ad squid.Nihilanim keffiyeh helvetica, craft beer labore wes anderson crednesciunt sapiente ea proident.",
                color:"#e95159",
                link:'dsdsds'
            },]
        return (
            <View style={{ marginTop: 100 }}>
                {list.map((item, index) => (
                    <EC description={item.text} title={item.title} 
                        color={item.color} link={item.link}/>
                ))}
            </View>

        );
    }
}


export default Teste;