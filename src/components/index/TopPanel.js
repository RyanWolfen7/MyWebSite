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
          <div className="Bio" id="Bio">
            <p>
              A full stack developer, world traveler, and Veteran of the US Army.
              Ryan has a serious passion for tech, programing, and growing as a developer.
              With a plethora of skills and experience, he brings an unique approach to
              solving complex problems and is more then happy to help, teach, or learn any
              way he can.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexTopPanel;
