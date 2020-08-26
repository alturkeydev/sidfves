import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './logo.png';

const Logo = () => {
return (
  <div className='ma4 mt0 pa2 pl0 pt4 br2 b--black'>
        <Tilt className="Tilt br2 shadow-2 br3 ba white b--black" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
          <div className="Tilt-inner pa3 center">
            <img style={{paddingTop: '5px'}} alt='logo' src={logo}/>
          </div>
        </Tilt>
  </div>
);
}

export default Logo;
