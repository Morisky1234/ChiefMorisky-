document.addEventListner("DOMcontentLoaded", function() {
	var audioPlayer = document.getElementById('audio-player');
	var playBtn = document.getElemntById('play-btn');
	var pauseBtn = document.getElementById('pause-btn');   

    playBtn.addEventListner('click', function() {
    	audioPlayer.const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MusicPlayer= () => {
   const [tracks, setTracks] = useState([]);
   const [currentTrack, setCurrentTrack] = useState(null);

   useEffect(() => {
     axios.get('http://localhost:3001/api/tracks')
       .then(response => {
         setTracks(response.data);
         setCurrentTrack(response.data[0]);s2
       }
   }
app.use(bodyParser.json());
app.use(cors));

// Sample music tracks
const tracks = [
  { id: 1, title: 'Song 1' artist: 'Artist 1', url: 'https://www.lesmusicexpress.com/song1.mp3' },
  { id: 2, title: 'Song 2' artist: 'Artist 2', url: 'https://www.lesmusicexpress.com/song2.mp3' },
  ];

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});play();
    });

    pauseBtn.addEventListner('click', function() {
    	audioPlayer.pause();
    });
});

document.addEventListner('DOMcontentLoaded'), () => {
  const infoButton = document.getElementByID('infoButton');
  const infoButton = document.getElementByID('infoText');

  infoButton.addEventListner('click', () => {
    if (infoText.style.display === 'none')
  }
}    