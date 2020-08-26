import React from 'react';

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
    return Math.round((Date.parse(this.getTodaysDate()) - Date.parse(this.props.state.dob))/30670000000);
  }

  render() {
    const age = this.calculateHAge();
    const yunr = 60 - this.calculateHAge();
    const ryunr = Math.round(60 - this.calculateHAge());
    let vesm = 0;
    switch(ryunr) {
      case 1:
        vesm = 12;
        break;
      case 2:
        vesm = 13;
        break;
      case 3:
        vesm = 14;
        break;
      case 4:
        vesm = 15;
        break;
      case 5:
        vesm = 16;
        break;
      case 6:
        vesm = 17;
        break;
      case 7:
        vesm = 18;
        break;
      case 8:
        vesm = 19;
        break;
      case 9:
        vesm = 20;
        break;
      case 10:
        vesm = 21;
        break;
      case 11:
        vesm = 22;
        break;
      case 12:
        vesm = 23;
        break;
      case 13:
        vesm = 24;
        break;
      case 14:
        vesm = 25;
        break;
      case 15:
        vesm = 26;
        break;
      case 16:
        vesm = 27;
        break;
      case 17:
        vesm = 28;
        break;
      case 18:
        vesm = 29;
        break;
      case 19:
        vesm = 30;
        break;
      case 20:
        vesm = 31;
        break;
      case 21:
        vesm = 32;
        break;
      case 22:
        vesm = 33;
        break;
      case 23:
        vesm = 34;
        break;
      case 24:
        vesm = 35;
        break;
      case 25:
        vesm = 36;
        break;
      default:
        vesm = 36;
        break;
    }
    const strpay = (this.props.state.bs * 1445).toString();
    const fpay = strpay.substring(0,2) + "," + strpay.substring(2,5) + "." + strpay.substring(5,7);

    const strmgc = (strpay * 0.08555).toString();
    const mgc = strmgc.substring(0,1) + "," + strmgc.substring(1,4) + "." + strmgc.substring(4,6);

    const viastr = (vesm * this.props.state.bs).toString();
    const via = viastr.substring(0,3) + "," + viastr.substring(3,viastr.length);

    let gctstr = 0;
    if(ryunr >= 3) {
      gctstr = (36 * strmgc).toString();
    } else {
      gctstr = (yunr * 12 * strmgc).toString();
    }
    const gct = gctstr.substring(0,2) + "," + gctstr.substring(2,5);

    const gcstr = (parseInt(gctstr.substring(0,5)) + parseInt(viastr)).toString();
    const gc = gcstr.substring(0,3) + "," + gcstr.substring(3,6);
    return (
      <div className="pt4">
        <article className='br3 ba black b--black k-10 mv4 w-90 w-90-m w-50-l mw6 shadow-5 center'>
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="input" className="ba b--transparent ph0 mh0">
                <label className="f3 fw6 mh0">Calculation Report</label>
                <div className="mt3">
                  <p className="db fw6 lh-copy f6 tl b dim">Hejiri Age: <strong className="white b">{`${age}`}</strong></p>
                  <p className="db fw6 lh-copy f6 tl dim">Years until normal retirement: <strong className="white b ">{`${yunr}`}</strong></p>
                  <p className="db fw6 lh-copy f6 tl dim">Rounded years until normal retirement: <strong className="white b ">{`${ryunr}`}</strong></p>
                  <p className="db fw6 lh-copy f6 tl dim">VES Multiples: <strong className="white b">{`${vesm}`}</strong></p>
                  <p className="db fw6 lh-copy f6 tl dim">Fixed Pay: <strong className="white b">{`${fpay}`} SAR</strong></p>
                  <p className="db fw6 lh-copy f6 tl dim">Monthly GOSI Contributions: <strong className="white b ">{`${mgc}`} SAR</strong></p>
                  <p className="db fw6 lh-copy f6 tl dim">VES Incentive Award: <strong className="white b">{`${via}`} SAR</strong></p>
                  <p className="db fw6 lh-copy f6 tl dim">GOSI Contributions Top Up (9%): <strong className="white b ">{`${gct}`} SAR</strong></p>
                <label className="f3 fw6 mh0">Conclusion Report</label>
                  <p className="db fw6 lh-copy f6 tl b dim">Golden Check: <strong className="yellow b">{`${gc}`} SAR</strong></p>
                  <p className="db fw6 lh-copy f6 tl dim">Medical Coverage (Self & Dependents): <strong className="yellow  b">{`5`} Years</strong></p>
                </div>
              </fieldset>
              <div>
                <input
                  onClick={this.onBack}
                  className="b pa3 pv1 mr2 input-reset ba b--black black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Back"/>
                  <input
                    onClick={this.onBack}
                    className="b pa3 pv1 input-reset ba b--black white bg-red grow pointer f6 dib"
                    type="submit"
                    value="Generate PDF"/></div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default Report;
