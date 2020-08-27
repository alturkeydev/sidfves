import React from 'react';
import './Report.css';
import hage from './hage.png';
import gosi from './gosi.png';
import hc from './hc.png';
import award from './award.png';
import retire from './retire.png';
import salary from './salary.png';

class Report extends React.Component {

  onBack = () => {
    this.props.onRouteChange('cal');
  }

  getTodaysDate = () => {
    let d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
  }

  calculateHAge = () => {
    const age = Math.round((Date.parse(this.getTodaysDate()) - Date.parse(this.props.state.dob))/30550000000);
    return isNaN(age) ? 0 : age;
  }

  calculateHAgeAcu = () => {
    const rawAge = ((Date.parse(this.getTodaysDate()) - Date.parse(this.props.state.dob))/30550000000);
    const age = Math.round((rawAge) * 100) / 100;
    return isNaN(age) ? 0 : age;
  }


  render() {
    const age = this.calculateHAge();

    const ytr = 60 - age;

    const acuYTR = Math.round(((60 - this.calculateHAgeAcu()) + Number.EPSILON) * 100) / 100;
    let vesm = 0;
    if (acuYTR > 1 && acuYTR < 1.9999999999) {
      vesm = 12
    } else if (acuYTR > 2 && acuYTR < 2.9999999999) {
      vesm = 13;
    } else if (acuYTR > 3 && acuYTR < 3.9999999999) {
      vesm = 14;
    } else if (acuYTR > 4 && acuYTR < 4.9999999999) {
      vesm = 15;
    } else if (acuYTR > 5 && acuYTR < 5.9999999999) {
      vesm = 16;
    } else if (acuYTR > 6 && acuYTR < 6.9999999999) {
      vesm = 17;
    } else if (acuYTR > 7 && acuYTR < 7.9999999999) {
      vesm = 18;
    } else if (acuYTR > 8 && acuYTR < 8.9999999999) {
      vesm = 19;
    } else if (acuYTR > 9 && acuYTR < 9.9999999999) {
      vesm = 20;
    } else if (acuYTR > 10 && acuYTR < 10.9999999999) {
      vesm = 21;
    } else if (acuYTR > 11 && acuYTR < 11.9999999999) {
      vesm = 22;
    } else if (acuYTR > 12 && acuYTR < 12.9999999999) {
      vesm = 23;
    } else if (acuYTR > 13 && acuYTR < 13.9999999999) {
      vesm = 24;
    } else if (acuYTR > 14 && acuYTR < 14.9999999999) {
      vesm = 25;
    } else if (acuYTR > 15 && acuYTR < 15.9999999999) {
      vesm = 26;
    } else if (acuYTR > 16 && acuYTR < 16.9999999999) {
      vesm = 27;
    } else if (acuYTR > 17 && acuYTR < 17.9999999999) {
      vesm = 28;
    } else if (acuYTR > 18 && acuYTR < 18.9999999999) {
      vesm = 29;
    } else if (acuYTR > 19 && acuYTR < 19.9999999999) {
      vesm = 30;
    } else if (acuYTR > 20 && acuYTR < 20.9999999999) {
      vesm = 31;
    } else if (acuYTR > 21 && acuYTR < 21.9999999999) {
      vesm = 32;
    } else if (acuYTR > 22 && acuYTR < 22.9999999999) {
      vesm = 33;
    } else if (acuYTR > 23 && acuYTR < 23.9999999999) {
      vesm = 34;
    } else if (acuYTR > 24 && acuYTR < 24.9999999999) {
      vesm = 35;
    } else if (acuYTR > 25 && acuYTR < 25.9999999999) {
      vesm = 36;
    } else if (acuYTR > 26) {
      vesm = 36;
    } else {
      vesm = 0;
    }
    const gosiSalary = isNaN(this.props.state.bs * 1.25) ? 0 : this.props.state.bs * 1.25;
    const gosiCont = Math.round(((gosiSalary * 0.09) + Number.EPSILON) * 100) / 100;

    const via = Math.round(((gosiSalary * vesm) + Number.EPSILON) * 100) / 100;
    let gtu = 0;
    if (acuYTR >= 3) {
      gtu = Math.round(((36 * gosiCont) + Number.EPSILON) * 100) / 100;
    } else {
      gtu = Math.round(((acuYTR * 12 * gosiCont) + Number.EPSILON) * 100) / 100;
    }
    let ia = 0;
    const viaGtu = via + gtu;
    if(viaGtu > 0 && viaGtu < 300000) {
      ia = 300000;
    } else if (viaGtu > 300000 && viaGtu < 700000) {
      ia = Math.round((viaGtu + Number.EPSILON) * 100) / 100;
    } else if (viaGtu > 700000) {
      ia = 700000;
    }

    const medCov = 5;

    return (
      <div className="pt5">
        <div className='Pattern br3 black k-10 mv3 w-80 w-80-m w-50-l mw7 shadow-1 center w3-border-green w3-leftbar w3-rightbar w3-white'>
          <h1 className="b f3">Your Information</h1><br/>
        </div>
        <div className='Pattern br3 black k-10 mv3 w-80 w-80-m w-50-l mw7 shadow-1 center w3-border-green w3-leftbar w3-rightbar w3-white'>
            <ul className="w3-ul w3-card-2 w3-center" style={{ width: "100%" }}>
              <li>
                <h6 className="f4 grow w3-animate-right">
                  <img src={hage} alt="" className="w3-bar-item w3-square" style={{ width:"60px" }}/>
                    <br/>
                    <span style={{fontSize: "1rem", textAlign: "justify"}} className="w3-bar-item">Hijri Age &#8594;  <strong>{age} yrs</strong></span>
                </h6>
              </li>
              <li>
                <h6 className="f4 grow w3-animate-right">
                  <img src={retire} alt="" className="w3-bar-item w3-square" style={{ width:"60px" }}/>
                    <br/>
                    <span style={{fontSize: "1rem", textAlign: "justify"}} className="w3-bar-item">Years to Retirement &#8594;  <strong>{isNaN(ytr) ? "0 yrs" : age > 0 ? ytr > 0 ? ytr + " yrs" : "retired" : "0 yrs"}</strong></span>
                </h6>
              </li>
              <li>
                <h6 className="f4 grow w3-animate-right">
                  <img src={salary} alt="" className="w3-bar-item w3-square w3-animate-right" style={{ width:"70px" }}/>
                    <br/>
                    <span style={{fontSize: "1rem", textAlign: "justify"}} className="w3-bar-item">GOSI-Eligible Salary &#8594;  <strong>{gosiSalary} &#65020;</strong></span>
                </h6>
              </li>
              <li>
                <h6 className="f4 grow w3-animate-right">
                  <img src={gosi} alt="" className="w3-bar-item w3-square" style={{ width:"70px" }}/>
                    <br/>
                    <span style={{fontSize: "1rem", textAlign: "justify"}} className="w3-bar-item">Monthly GOSI Deduct &#8594;  <strong>{isNaN(gosiCont) ? 0 : gosiCont} &#65020;</strong></span>
                </h6>
              </li>
            </ul>
        </div>
        <div className='br3 black k-10 mv3 w-80 w-80-m w-50-l mw7 shadow-1 center w3-border-green w3-leftbar w3-rightbar w3-white'>
          <h1 className="b f3">Your Irfan Benefits</h1>
        </div>
        <div className='br3 black k-10 mv3 w-80 w-80-m w-50-l mw7 shadow-1 center w3-border-green w3-leftbar w3-rightbar w3-white'>
            <ul className="w3-ul w3-card-2 w3-center" style={{ width: "100%" }}>
              <li>
                <h6 className="f4 grow w3-animate-right">
                  <img src={award} alt="" className="w3-bar-item w3-square" style={{ width:"70px" }}/>
                    <br/>
                    <span style={{fontSize: "1rem", textAlign: "justify"}} className="w3-bar-item">Irfan Award &#8594;  <strong>{ia > 0 ? ia.toString().substring(0,3) + "," + ia.toString().substring(3,ia.length) : ia} &#65020;</strong></span>
                </h6>
              </li>
              <li>
                <h6 className="f4 grow w3-animate-right">
                  <img src={hc} alt="" className="w3-bar-item w3-square" style={{ width:"60px" }}/>
                    <br/>
                    <span  style={{fontSize: "1rem", textAlign: "justify"}}className="w3-bar-item">Medical Coverage &#8594;  <strong>{ia > 0 ? medCov : 0} yrs</strong></span>
                </h6>
              </li>
              <li>
                <div
                  style={{fontSize: "0.8rem", textAlign: "justify"}}
                  className="b w3-panel w3-pale-red w3-leftbar w3-border-red">
                  <p>Please, note that any estimate figures generated by this tool are not final. Final Irfan Award will only be calculated by official and approved applications.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className='br3 black k-10 mv3 w-80 w-80-m w-50-l mw7 shadow-1 center w3-border-green w3-leftbar w3-rightbar w3-white'>
            <h1 className="b f3">Options</h1>
          </div>
          <div className='br3 black k-10 mv3 w-80 w-80-m w-50-l mw7 shadow-1 center w3-border-green w3-leftbar w3-rightbar w3-white'>
            <div className="ma2 pa2">
              <div
                style={{fontSize: "0.8rem", textAlign: "justify"}}
                className="b w3-panel w3-pale-green w3-leftbar w3-border-green">
                <p>Please, note that this tool is secured with an SSL encryption, and runs completely offline on your device.</p>
              </div>
              <input
                onClick={this.onBack}
                className="b pa3 pv1 mr2 input-reset ba b--black black bg-transparent grow pointer f6 dib"
                type="submit"
                value="&#8592;"/>
                <input
                  onClick={this.onSubmitInput}
                  className="b pa3 pv1 mr2 input-reset ba b--black black w3-red w3-hover-red bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Generate PDF"/>
            </div>
          </div>
      </div>
    );
  }
}

export default Report;
