import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const ItemDetail = ({ route, navigation }) => {
  const { id } = route.params;
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/items/${id}`)
      .then(response => setItem(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/items/${id}`)
      .then(() => {
        navigation.goBack();
      })
      .catch(error => console.error(error));
  };

  if (!item) return null;

  return (
    <View>
      <Text>Nombre: {item.nombre}</Text>
      <Text>Descripción: {item.descripcion}</Text>
      <Text>Precio: {item.precio}</Text>
      <Text>Estado: {item.estado}</Text>
      <Text>Categoría: {item.categoria}</Text>
      <Button title="Eliminar" onPress={handleDelete} />
    </View>
  );
};

export default ItemDetail;
