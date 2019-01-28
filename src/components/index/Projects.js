import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import projects from '../../assets/images/projects.png'

class Projects extends Component {
  render(){
    return (
      <div className="projects" id="projects">
        <Menu customBurgerIcon={ <img src={ projects } alt="Projects"/>} width={'75%'} right>
          <TeamProjects/>
          <SoloProjects/>
        </Menu>
      </div>
    )
  }
}

const TeamProjects = () => {
  return (
    <div className="teamProjects" id="teamProjects">
      <h1> Team Projects </h1>
      <div className="givIt" id="givIt">
        <h3> Team GIVEit </h3>
        <a href="https://github.com/RyanWolfen7/GIVEit-frontend">
          GIVEit Frontend
        </a>
        <a href="https://github.com/RyanWolfen7/GIVEit-backend">
          GIVEit Backend
        </a>
        <p>
          GIVEit is a social platform for connecting people in
          need with people offering goods/services that can help
          them. This was a proof of concept for a charity web
          service that would alow people to donate or recieve
          goods/services. The GIVEit team accomplished this in
          a two week period utalizing 2 day sprints, regular
          standups and retros, and having a 5 member team. The
          front end uses 3 Google API's and the backend API.
          The front end is written in JS in React, and the backend
          is a Rails API linked to a PostgreSQL database.
        </p>
      </div>
      <div className="exponential" id="exponential">
        <h3> Team Exponential </h3>
        <a href="https://github.com/RyanWolfen7/exponential-testing">
          Exponential Testing
        </a>
        <a href="https://github.com/RyanWolfen7/exponential-notes">
          Exponential Notes
        </a>
        <p>
          Team Exponential was a team of 6 that created a testing
          framework and a single page notes app in a week. The
          team focused on creating both projects using vanilla JS
          without utalizing frameworks and utalizing AGILE
          methodologies effectively. This task was taken on after
          just two days of first learning JavaScript, with the hopes
          of increasing the teams proficiencies in a new language.
          The team rotated paring partners daily, and did one day
          sprints. Both the testing framework and the app where
          completely test driven.
        </p>
      </div>
      <div className="villansBook" id="villansBook">
        <h3> The Team That Shall Not Be Named </h3>
        <a href="https://github.com/RyanWolfen7/Villains_Book">
          Villans Book
        </a>
        <p>
          Villans Book is a social networking web app modeled off of
          popular social networking apps. The team worked on it for
          two weeks and it was built in Rails along side the Bootstrap
          framework. It is currently deployed to Heroku and was built
          from continious intigration with Travis. TTTSNBN was a small
          dev team of 4 and was developed over two weeks. The team used
          4 day sprints, and focused on group cohision with regular standups
          and retros. The Team achieved thier MVP in less then a day and
          spent the rest of thier time creating new features and covering
          edge cases. The project boasts 98% testing coverage and was
          comletely made through TDD principles.
        </p>
      </div>
      <div className="makersBnB" id="makersBnB">
        <h3> Team Jaguar </h3>
        <a href="https://github.com/RyanWolfen7/MakersBnb">
        Makers B&B
        </a>
        <p>
          Team Jaguar was a small team of 4 junior devs. MakersBnb is
          a clone from a popular room renting website. It was developed
          in two weeks utalizing Agile and TDD principles. It is a JS
          and Rails hybrid app that uses Jquery, DataMapper, Sinatra,
          and Capybara.
        </p>
      </div>
    </div>
  )
}

const SoloProjects = () => {
  return (
    <div className="soloProjects" id="soloProjects">
      <h1> Solo Projects </h1>
      <div className="thisSite" id="thisSite">
        <h3> This Portfolio </h3>
        <a href="https://github.com/RyanWolfen7/MyWebSite">
          Repo
        </a>
        <p>
          This site was created as a single page react app and tlc.
          Most of the features are basic react components and css.
        </p>
      </div>
      <div className="jsBackend" id="jsBackend">
        <h3> JS Backend Practice </h3>
        <a href="https://github.com/RyanWolfen7/backendJsPractice">
          Repo
        </a>
        <p>
          This is a simple Node.js, Express, and Mongodb JS backend.
          It was built in less then a day and is put on here to highlight
          Ryan's ability to work with a multitude of backends.
        </p>
      </div>
      <div className="bank" id="bank">
        <h3> Bank Tech Test </h3>
        <a href="https://github.com/RyanWolfen7/bank_tech_test">
          Repo
        </a>
        <p>
          This repo is a showcase for Ryans TDD process. Not only does it
          boast a very detailed orientated README, but also includes a 5
          minute video where you can see how he approaches TDD during a
          practicall challenge.
        </p>
      </div>
      <div className="rose" id="rose">
        <h3> The Guilded Rose </h3>
        <a href="https://github.com/RyanWolfen7/gilded_rose_design_project">
          Repo
        </a>
        <p>
          This repo is a showcase for Ryans refactoring process. He attempted
          this challenge early in his time at Makers Academy.
        </p>
      </div>
      <div className="takeAway" id="takeAway">
        <h3> Takeaway App </h3>
        <a href="https://github.com/RyanWolfen7/takeaway-challenge">
          Repo
        </a>
        <p>
          This was one of Ryans first challenges. Its a nice reference to
          see where he has come from since he started coding.  
        </p>
      </div>
    </div>
  )
}

export default Projects;
