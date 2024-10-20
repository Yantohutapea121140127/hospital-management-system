const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [
  { email: 'admin@example.com', password: 'admin12345' } // Dummy credential
];

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ success: true, token: 'hospital-system-token' });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  users.push({ email, password });
  res.json({ success: true, message: 'User registered successfully' });
});

app.post('/forgot-password', (req, res) => {
  const { email } = req.body;
  const user = users.find(u => u.email === email);
  if (user) {
    res.json({ message: 'Password reset link sent to email' });
  } else {
    res.json({ message: 'Email not found' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
