import React, { Component } from 'react';
import myImage from '../../assets/images/ME.jpg'

class IndexTopPanel extends Component {
  render(){
    return (
      <div className="IndexTopPanel" id="IndexTopPanel">
        <div className="Header" id="Header">
          <div className="RyanClark" id="RyanClark"> Ryan Clark </div>
          <div className="Profession" id="Profession"> Full Stack Web Developer </div>
          <div className="Me" id="Me">
            <img src={myImage} alt="Broken" className="port" />
          </div>
        </div>
      </div>
    )
  }
}

export default IndexTopPanel;
