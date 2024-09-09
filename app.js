const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// this asdsadasdsadsa444444444444444444444444444400000000000000000004444444444444
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
