import React, { Component } from 'react';
import './App.css';
import SimpleMap from './components/google_map.js';

class App extends Component {
  constructor() {
    super();


  }
  render() {
    return (
      <div className="App">
        <h1>Past Tents Map!</h1>
        <SimpleMap />
      </div>
    );
  }
}

export default App;
