import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import projects from '../../assets/images/projects.png'

class Projects extends Component {
  render(){
    return (
      <div className="projects" id="projects">
        <Menu customBurgerIcon={ <img src={ projects } alt="Projects"/>} width={'75%'} right>

        </Menu>
      </div>
    )
  }
}

export default Projects;
