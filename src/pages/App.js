import React, { Component } from 'react';
import '../css/app.css';
import IndexTopPanel from '../components/index/TopPanel.js'
import '../css/index/TopPanel.css';

class App extends Component {

  render() {

    return (
      <div className="app">
        <IndexTopPanel/>
      </div>
    )
  }
}

export default App;
