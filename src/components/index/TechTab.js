import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import Tech from '../../assets/images/Tech.jpg'

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
    <a>test</a>
  );
};

export default TechTab;
