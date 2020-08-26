import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './logo.png';

const Logo = () => {
return (
  <div className='ma4 mt0 pa2 pt5 pb0 br2 b--white'>
        <Tilt className="Tilt br2 shadow-2 br3 ba white b--white" options={{ max : 55 }} style={{ height: 170, width: 190 }} >
          <div className="Tilt-inner pa3 center">
            <img style={{paddingTop: '5px'}} alt='logo' src={logo}/>
          </div>
        </Tilt>
  </div>
);
}

export default Logo;
