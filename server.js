const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors));

// Sample music tracks
const tracks = [
  { id: 1, title: 'Song 1' artist: 'Artist 1', url: 'https://www.lesmusicexpress.com/song1.mp3' },
  { id: 2, title: 'Song 2' artist: 'Artist 2', url: 'https://www.lesmusicexpress.com/song2.mp3' },
  ];

app.listen(PORT, () => {
	console.log('Server is running on port ${PORT}');
});