import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import contacts from '../../assets/images/contacts.png'


class Contact extends Component {
  render(){
    return (
      <div className="contacts" id="contacts">
        <Menu customBurgerIcon={ <img src={ contacts} alt="Contact"/>} width={'75%'} right>
          <Details />
        </Menu>
      </div>
    )
  }
}

const Details = () => {
  return (
    <div className="details" id="details">
      <h1> Phone Number </h1>
      +1-210-294-1400
      <h1> Email </h1>
      <a href='wolfen7lada@gmail.com'> wolfen7lada@gmail.com </a>
      <h1> Linked In </h1>
      <a href='https://www.linkedin.com/in/ryan-clark-44b156127'> https://www.linkedin.com/in/ryan-clark-44b156127 </a>
      <h1> Github </h1>
      <a href='https://github.com/RyanWolfen7'> https://github.com/RyanWolfen7 </a>
      <h1> Youtube </h1>
      <a href='https://www.youtube.com/channel/UCH4TK55SqiGyTIzwUnVpfxg'> https://www.youtube.com/channel/UCH4TK55SqiGyTIzwUnVpfxg </a>
      <h1> Hello Poetry </h1>
      <a href='https://hellopoetry.com/ryan-clark/'> https://hellopoetry.com/ryan-clark/ </a>

    </div>
  )
}

export default Contact;
