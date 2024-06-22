import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from 'axios';

const ItemList = ({ navigation }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/items')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nombre}</Text>
            <Button title="Ver" onPress={() => navigation.navigate('ItemDetail', { id: item.id })} />
          </View>
        )}
      />
      <Button title="Agregar Item" onPress={() => navigation.navigate('ItemForm')} />
    </View>
  );
};

export default ItemList;
