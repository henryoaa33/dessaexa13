import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const ItemForm = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [estado, setEstado] = useState('');
  const [categoria, setCategoria] = useState('');
  const [url_fotografia, setUrlFotografia] = useState('');

  const handleSubmit = () => {
    axios.post('http://localhost:3000/items', { nombre, descripcion, precio, estado, categoria, url_fotografia })
      .then(() => {
        navigation.goBack();
      })
      .catch(error => console.error(error));
  };

  return (
    <View>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} />
      <TextInput placeholder="Descripción" value={descripcion} onChangeText={setDescripcion} />
      <TextInput placeholder="Precio" value={precio} onChangeText={setPrecio} keyboardType="numeric" />
      <TextInput placeholder="Estado" value={estado} onChangeText={setEstado} />
      <TextInput placeholder="Categoría" value={categoria} onChangeText={setCategoria} />
      <TextInput placeholder="URL de Fotografía" value={url_fotografia} onChangeText={setUrlFotografia} />
      <Button title="Guardar" onPress={handleSubmit} />
    </View>
  );
};

export default ItemForm;
