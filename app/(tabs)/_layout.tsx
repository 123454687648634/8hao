import React from "react";
import { StyleSheet, View, Dimensions, Platform } from 'react-native';
import { Tabs } from "expo-router";
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default function Layout() {
  return (
    <Tabs 
      backBehavior="order"
      screenOptions={{ 
          tabBarActiveTintColor: "#E8B4B8",
          tabBarInactiveTintColor: "#A0AEC0",
          tabBarStyle: {
            backgroundColor: "#FFFFFF"
          }
      }}>

        <Tabs.Screen
            name="index"
            options={{href: null}}
        />

        <Tabs.Screen name="p-home" options={{
            title: '首页', 
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <FontAwesome6 name="house" size={20} color={color} />
            )
        }}/>

        <Tabs.Screen name="p-custom_flower" options={{
            title: '定制', 
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <FontAwesome6 name="palette" size={20} color={color} />
            )
        }}/>

        <Tabs.Screen name="p-cart" options={{
            title: '购物车', 
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <FontAwesome6 name="bag-shopping" size={20} color={color} />
            )
        }}/>

        <Tabs.Screen name="p-user_center" options={{
            title: '我的', 
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <FontAwesome6 name="user" size={20} color={color} />
            )
        }}/>
    </Tabs>
  );
}