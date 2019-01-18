import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Skills from '../../assets/images/Skills.jpg'

class SkillsTab extends Component {
  render(){
    return (
      <div className="skills" id="skills">
        <Menu customBurgerIcon={ <img src={ Skills } width={'10vw'} alt="Skills"/>} right>
          <SkillsList/>
        </Menu>
      </div>
    )
  }
}

const SkillsList = () => {
  return (
      <div className="skillsList" id= "skillsList">
        <h1> Leadership </h1>
        <p>
          From the Jungles of Southeast Asia, to the computer labs of London,
          Ryan has lead teams of programers, teams of salesmen, and teams of infantrymen.
          Taught leadership from some of the best institutions in the United States Army,
          With over 10 years experience Ryan takes pride in his versitile and adaptive
          leadership styles.
        </p>
        <h1> Agile Methodology </h1>
        <h1> Self Learning</h1>
        <h1> Test Driven Development</h1>
        <h1> Object Oriented Design</h1>
        <h1> Domain Driven Design</h1>
      </div>
  );
};

export default SkillsTab;
