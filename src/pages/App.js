import React, { Component } from 'react';
import '../css/app.css';
import IndexTopPanel from '../components/index/TopPanel.js';
import '../css/index/TopPanel.css';
import Hyperlinks from '../components/index/Hyperlinks.js';
import '../css/index/Hyperlinks.css';
import SkillsTab from '../components/index/SkillsTab.js';
import '../css/index/SkillsTab.css';

class App extends Component {

  render() {

    return (
      <div className="app">
        <IndexTopPanel/>
        <SkillsTab/>
        <Hyperlinks/>
      </div>
    )
  }
}

export default App;
