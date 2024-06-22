import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ItemList from '../components/ItemList';
import ItemDetail from '../components/ItemDetail';
import ItemForm from '../components/ItemForm';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ItemList">
      <Stack.Screen name="ItemList" component={ItemList} />
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
      <Stack.Screen name="ItemForm" component={ItemForm} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
