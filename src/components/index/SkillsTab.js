import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Skills from '../../assets/images/Skills.jpg'

class SkillsTab extends Component {
  render(){
    return (
      <div className="skills" id="skills">
        <Menu customBurgerIcon={ <img src={ Skills } alt="Skills"/>} width={ '.02vw'} left>
          <SkillsList/>
        </Menu>
      </div>
    )
  }
}

const SkillsList = () => {
  return (
      <div className="skillsList" id= "skillsList">
        Leadership
        
      </div>
  );
};

export default SkillsTab;
