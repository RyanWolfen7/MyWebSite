import React, { Component } from 'react';
import '../css/app.css';
import IndexTopPanel from '../components/index/TopPanel.js';
import '../css/index/TopPanel.css';
import Hyperlinks from '../components/index/Hyperlinks.js';
import '../css/index/Hyperlinks.css';
import SkillsTab from '../components/index/SkillsTab.js';
import '../css/index/SkillsTab.css';
import TechTab from '../components/index/TechTab.js';
import '../css/index/TechTab.css';
import Projects from '../components/index/Projects.js';
import '../css/index/Projects.css';
import Contacts from '../components/index/Contacts.js';
import '../css/index/Contacts.css';

class App extends Component {

  render() {

    return (
      <div className="app">
        <SkillsTab/>
        <TechTab/>
        <Projects/>
        <Contacts/>
        <IndexTopPanel/>
        <Hyperlinks/>
      </div>
    )
  }
}

export default App;
