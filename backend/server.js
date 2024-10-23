const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Logika autentikasi
  console.log('Login attempt:', { username, password });
  res.json({ message: 'Login success' });
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  // Logika pendaftaran
  console.log('Register attempt:', { username, password });
  res.json({ message: 'Register success' });
});

app.post('/forgot-password', (req, res) => {
  const { email } = req.body;
  // Logika forgot password
  console.log('Forgot password attempt:', { email });
  res.json({ message: 'Reset link sent' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
