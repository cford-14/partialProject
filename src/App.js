import React from 'react';
import './App.css';
import { Banner } from './banner/Banner'
import { Body } from './body/Body';

function App() {
  return (
    <div>
      <head>
          <link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css"/>
          <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
          <script src="semantic/dist/semantic.min.js"></script>
      </head>
    <div className="App">
      <Banner />
      <Body />
    </div>
    </div>
  );
}

export default App;
