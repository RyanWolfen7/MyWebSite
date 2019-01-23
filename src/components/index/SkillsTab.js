import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Skills from '../../assets/images/Skills.jpg'

class SkillsTab extends Component {
  render(){
    return (
      <div className="skills" id="skills">
        <Menu customBurgerIcon={ <img src={ Skills } alt="Skills"/>} width={'75%'} right>
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
        <p>
          Agile processes and army Active Decision Making  processes go hand to hand.
          Basically it is an efficient way of managing, tasking, tracking, and planning
          an operation or design project. Due to the eere similarity between the two
          methodologies, Ryan has an aditional 4 years experience using such methods in
          a dractically different and imensly more stressful environment.
        </p>
        <h1> Self Learning</h1>
        <p>
          Being an avid lover of anything tech, Ryan is constantly looking to improve and
          master everything from the core principles/fundamentals to the lastest trends in
          the industry. Every night before bed he keeps his basic skills sharp by frequenting
          codewars, catching up on his favorite coder youtubers, and touching up various projects.
          Ryan has learned to code a day before a preliminary entrance exam to Makers Academy, London
          UK and continues to challenge himself as a developer and as a person.
        </p>
        <h1> Test Driven Development</h1>
        <p>
          Having learned TDD at Makers Academy in London, Ryan quickly grasped the concepts and methodologies
          behind the importance of TDD. While quite capable of bashing out code, Ryan prefers TDD
          as he believes that understanding what you want to make before writing code directly impacts how
          proficient he is as a programer. Due to his use of TDD Ryan harldly encounters project crippling
          bugs and since he is a fond component for the Single Responsibility Principle, his code is mostly
          modular, repurposable, and tested in isolation.
        </p>
        <h1> Object Oriented Design</h1>
        <p>
          OOD and the SRP go together like peas and carrot. Being taught at Makers has influenced Ryan in
          the core principles behind OOD, so much so, that most of his personal projects are object orientated.
          While versitile in his design approach, he usually like to hone the skills at his disposal.
        </p>
        <h1> Domain Driven Design</h1>
        <p>
          Half the fun of a project is watching it evolve into something different, yet greater then you expected.
          Using Agile and Minimal Viable Product philosophies, Ryan can get a working prototype up quickly. With
          some tender love and care, he can get any project to a working production model with minimal improvements and
          in no time at all the minimum neccesary product transforms to something beautiful.  
        </p>
      </div>
  );
};

export default SkillsTab;
