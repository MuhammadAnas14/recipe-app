import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from "react"
import Recipes from '../Screens/Recipes'
import items from '../Screens/Items'
import News from '../Screens/News'

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Recipes" component={Recipes} />
        <Tab.Screen name="Items" component={items} />
        <Tab.Screen name="News" component={News} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs