import React, { Component } from 'react';
import Calculator from '../Components/Calculator/Calculator';
import Report from '../Components/Report/Report';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const initialState = {
  route: 'cal',
  bs: 0,
  dob: null
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'cal',
      bs: 0,
      dob: null
    }
  }

  setBSalary = (salary) => {
      this.setState({bs: salary})
  }

  setDOB = (dob) => {
      this.setState({dob: dob})
  }

  onRouteChange = (route) => {
      if (route === 'cal') {
        this.setState(initialState);
      } else {
        this.setState({route: route});
      }
    }

  render() {
    return (
      <div className="App">
        <Particles params={particlesOptions} className='particles' />
        { this.state.route === 'cal' ? <div> <Calculator  state={this.state} setBSalary={this.setBSalary} setDOB={this.setDOB} onRouteChange={this.onRouteChange}/> </div> : <div> <Report state={this.state} onRouteChange={this.onRouteChange}/> </div>}
        <footer style={{fontFamily: 'Courier New'}} className="f5 white pb3">
          © {new Date().getFullYear()} | By <a className="dim hover-black b" href="https://yousefalturkey.sa/" target="_blank"  rel="noopener noreferrer" style={{textDecoration: "none"}}> Yousef</a>.
        </footer>
      </div>
    );
  }
}

export default App;
