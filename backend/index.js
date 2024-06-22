const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');

app.use(express.json());

app.get('/items', (req, res) => {
  db.query('SELECT * FROM items', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/items', (req, res) => {
  const { nombre, descripcion, precio, estado, categoria, url_fotografia } = req.body;
  db.query('INSERT INTO items (nombre, descripcion, precio, estado, categoria, url_fotografia) VALUES (?, ?, ?, ?, ?, ?)',
    [nombre, descripcion, precio, estado, categoria, url_fotografia],
    (err, result) => {
      if (err) throw err;
      res.status(201).json({ id: result.insertId, ...req.body });
    });
});

app.get('/items/:id', (req, res) => {
  db.query('SELECT * FROM items WHERE id = ?', [req.params.id], (err, result) => {
    if (err) throw err;
    if (result.length === 0) return res.status(404).send('Item not found');
    res.json(result[0]);
  });
});

app.delete('/items/:id', (req, res) => {
  db.query('DELETE FROM items WHERE id = ?', [req.params.id], (err, result) => {
    if (err) throw err;
    res.status(204).send();
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
