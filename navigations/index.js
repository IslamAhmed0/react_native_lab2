import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Posts from '../screens/Posts'
import Profile from '../screens/Home'
import Stack from './stack'
import Home  from './pstack'
const Tab = createBottomTabNavigator();
  
export default function () {
    return (
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{activeTintColor: 'white', inactiveTintColor: 'black', style:{backgroundColor: 'orange', height: 200}, labelStyle:{marginBottom: 30, fontSize: 40, fontWeight: 'bold'}}}>
                  
          <Tab.Screen name="posts" component={Stack} />
          <Tab.Screen name="profile" component={Home} />

        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
