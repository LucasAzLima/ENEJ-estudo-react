import React from 'react';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import page1 from "../pages/page1";
import page2 from "../pages/page2";
import page3 from "../pages/page3";
import page4 from "../pages/page4";
import page5 from "../pages/page5";
import page6 from "../pages/page6";
import page7 from "../pages/page7";
import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons"
 

const AppNavigator = createDrawerNavigator(
  {
    Timeline: {
      screen: page1,
      navigationOptions: {
        title: "Timeline",
        headerTintColor:"#fff",
        header:null,
        activeTintColor: "#05d19d" ,
        drawerIcon: () => <AntDesign name="home" color="#fff" size={25}/>
      },

    },
    Programacao: {
      screen: page2,
      navigationOptions: {
        title: "Programação",
        header:null,
        drawerIcon: () => <AntDesign name="calendar" color="#fff" size={25}/>
      }
    },
    Agenda: {
      screen: page3,
      navigationOptions: {
        title: "Agenda",
        header:null,
        drawerIcon: () => <AntDesign name="book" color="#fff" size={25}/>
      }
    },
    Expositores: {
      screen: page4,
      navigationOptions: {
        title: "Expositores",
        header:null,
        drawerIcon: () => <Ionicons name="ios-people" color="#fff" size={25}/>
      }
    },
    Participantes: {
      screen: page5,
      navigationOptions: {
        title: "Participantes",
        header:null,
        drawerIcon: () => <MaterialIcons name="person-pin" color="#fff" size={25}/>
      }
    },
    Palestrantes: {
      screen: page6,
      navigationOptions: {
        title: "Palestrantes",
        header:null,
        drawerIcon: () => <MaterialIcons name="people" color="#fff" size={25}/>
      }
    },
    Favoritos: {
      screen: page7,
      
      navigationOptions: {
        title: "Favoritos",
        header:null,
        drawerIcon: () => <AntDesign name="staro" color="#fff" size={25}/>,
      }
    },
  },
  {
    initialRouteName: 'Timeline',
    drawerBackgroundColor:'#05d1a1',
    hideStatusBar:true
  }
);

export default createAppContainer(AppNavigator);
