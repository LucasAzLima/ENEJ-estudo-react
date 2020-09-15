import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import Home from "./Components/Screens/Home";
import Body from "./Components/Body/Body";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import login from "./Components/Screens/login";
import signup from "./Components/Screens/signup";
import teste from "./Components/Screens/teste";


const AppNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: Home,
      navigationOptions: {
        title: "ENEJ20",
        header:null,
      }
    },
    TesteScreen: {
      screen: teste,
      navigationOptions: {
        title: "TESTE",
        header:null,
      }
    },
    BodyScreen: {
      screen: Body,
      navigationOptions: {
        title: "React JS",
        headerTintColor:"#fff",
        headerStyle:{
          backgroundColor:"#05d1a1",
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        
      }
      
    },
    LoginScreen: {
      screen: login,
      navigationOptions: {
        title: "login",
        header:null
        
      }
    },
    SignupScreen: {
      screen: signup,
      navigationOptions:{
        header:null,
      }
    },
  },
  {
    initialRouteName: 'LoginScreen',
  }
);

export default createAppContainer(AppNavigator);
