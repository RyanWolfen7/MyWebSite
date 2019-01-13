import React, { Component } from 'react';
import '../css/app.css';
import IndexTopPanel from '../components/index/TopPanel.js';
import '../css/index/TopPanel.css';
import Hyperlinks from '../components/index/Hyperlinks.js';
import '../css/index/Hyperlinks.css';

class App extends Component {

  render() {

    return (
      <div className="app">
        <Hyperlinks/>
        <IndexTopPanel/>
      </div>
    )
  }
}

export default App;
