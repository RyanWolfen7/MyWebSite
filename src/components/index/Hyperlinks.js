import React, { Component } from 'react';
import gh from '../../assets/images/GH.png';
import li from '../../assets/images/LI.png';
import fb from '../../assets/images/FB.png';
import yt from '../../assets/images/YT.png';
import hp from '../../assets/images/HP.png';


class Hyperlinks extends Component {
  render() {
    return (
      <div className="Hyperlinks" id="Hyperlinks">
        <div className="Links" id="Links">
          <a className="Git" id="Git" href="https://github.com/RyanWolfen7">
            <img src={gh} alt="broken" className="gh"/>
          </a>
          <a className="LI" id="LI" href="https://www.linkedin.com/in/ryan-clark-44b156127/">
            <img src={li} alt="broken" className="li"/>
          </a>
          <a className="FB" id="FB" href="https://www.facebook.com/ryan.clark.18400">
            <img src={fb} alt="broken" className="fb"/>
          </a>
          <a className="YT" id="YT" href="https://www.youtube.com/channel/UCH4TK55SqiGyTIzwUnVpfxg">
            <img src={yt} alt="broken" className="yt"/>
          </a>
          <a className="HP" id="HP" href="https://hellopoetry.com/ryan-clark/">
            <img src={hp} alt="broken" className="hp"/>
          </a>
        </div>
      </div>
    )
  }
}

export default Hyperlinks;
