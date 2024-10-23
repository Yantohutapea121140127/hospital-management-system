const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password_anda',
  database: 'database_anda'
});

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  

  const checkQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(checkQuery, [email], async (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      return res.status(400).send({ message: 'Email sudah terdaftar' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan pengguna baru ke database
    const insertQuery = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.query(insertQuery, [email, hashedPassword], (err, result) => {
      if (err) throw err;
      return res.status(201).send({ message: 'Registrasi berhasil' });
    });
  });
});

app.listen(5000, () => {
  console.log('Server berjalan di port 5000');
});
