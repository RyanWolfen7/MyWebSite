import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import Tech from '../../assets/images/Tech.jpg';
import js from '../../assets/images/languages/JS.png';
import ruby from '../../assets/images/languages/Ruby.jpg';
import css from '../../assets/images/languages/css.png';
import html from '../../assets/images/languages/html.png';
import sql from '../../assets/images/languages/sql.jpg';
import c from '../../assets/images/languages/C.png';

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
    </div>
  );
};

export default TechTab;
