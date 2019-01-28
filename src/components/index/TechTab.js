import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import Tech from '../../assets/images/Tech.jpg';
import js from '../../assets/images/languages/JS.png';
import ruby from '../../assets/images/languages/Ruby.jpg';
import css from '../../assets/images/languages/css.png';
import html from '../../assets/images/languages/html.png';
import sql from '../../assets/images/languages/sql.jpg';
import c from '../../assets/images/languages/C.png';
import cSharp from '../../assets/images/languages/c-sharp.png';
import java from '../../assets/images/languages/java.jpeg';
import php from '../../assets/images/languages/php.png';
import atom from '../../assets/images/tech/atom.png';
import bootstrap from '../../assets/images/tech/bootstrap.png';
import expressjs from '../../assets/images/tech/expressjs.png';
import heroku from '../../assets/images/tech/heroku.png';
import mongodb from '../../assets/images/tech/mongodb.jpeg';
import mysql from '../../assets/images/tech/mysql.png';
import nodejs from '../../assets/images/tech/nodejslogo.png';
import postgresql from '../../assets/images/tech/postgresql.png';
import rails from '../../assets/images/tech/rails.png';
import react from '../../assets/images/tech/React.png';
import travis from '../../assets/images/tech/travis.jpeg';
import unity from '../../assets/images/tech/Unity.png';
import vs from '../../assets/images/tech/vs.png';

class TechTab extends Component {
  render(){
    return(
      <div className="tech" id="tech">
        <Menu customBurgerIcon={ <img src={ Tech } alt="Tech"/>} width={'75%'} right>
          <TechList/>
        </Menu>
      </div>
    )
  }
}

const TechList = () => {
  return(
    <div className="tech" id="tech">
      <Proficient/>
      <Functional/>
      <Stacks/>
    </div>
  );
};

const Proficient = () => {
  return (
    <div className="proficient" id="proficient">
      <h1> Proficient Languages </h1>
      <img src={ ruby } alt="Ruby" className="ruby" />
      <img src={ js } alt="JS" className="js" />
      <img src={ html } alt="html" className="html" />
      <img src={ css } alt="css" className="css" />
      <img src={ sql } alt="sql" className="sql" />
    </div>
  );
};

const Functional = () => {
  return (
    <div className="functional" id="functional">
      <h1> Language Familiarities </h1>
      <img src={ c } alt="c" className="c" />
      <img src={ cSharp } alt="cSharp" className="cSharp" />
      <img src={ java } alt="java" className="java" />
      <img src={ php } alt="php" className="php" />
    </div>
  );
};

const Stacks = () => {
  return (
    <div className="stacks" id="stacks">
      <h1> Stack Familiarities </h1>
      <div className="stackTop">
        <img src={ react } alt="react" className="react" />
        <img src={ nodejs } alt="nodejs" className="nodejs" />
        <img src={ mongodb } alt="mongodb" className="mongodb" />
        <img src={ bootstrap } alt="bootstrap" className="bootstrap" />
      </div>
      <div className="stackMid">
        <img src={ rails } alt="rails" className="rails" />
        <img src={ mysql } alt="mysql" className="mysql" />
        <img src={ postgresql } alt="postgresql" className="postgresql" />
        <img src={ travis } alt="travis" className="travis" />
      </div>
      <div className="stackLow">
        <img src={ heroku } alt="heroku" className="heroku" />
        <img src={ atom } alt="atom" className="atom" />
        <img src={ vs } alt="vs" className="vs" />
        <img src={ unity } alt="unity" className="unity" />
      </div>
    </div>
  );
};

export default TechTab;
