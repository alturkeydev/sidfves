import React from 'react';

class Calculator extends React.Component {

  onBSalaryChange = (event) => {
    this.setState(this.props.setBSalary(event.target.value))
  }

  onDOBChange = (event) => {
    this.setState(this.props.setDOB(event.target.value))
  }

  onSubmitInput = () => {
    this.props.onRouteChange('rep')
  }

  render() {
    return(
      <div className="pt6">
        <article className='br3 ba black b--black k-10 mv4 w-100 w-50-m w-50-l mw6 shadow-5 center'>
          <main className="pa4 white-80">
            <div className="measure">
              <fieldset id="input" className="ba b--transparent ph0 mh0">
                <legend id="fromTitle" className="f3 fw6 mh0 black">Calculator Settings</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6 black b" htmlFor="salary">Basic Salary</label>
                  <input
                    onChange={this.onBSalaryChange}
                    placeholder="13500"
                    className="pa2 b black ba bg-transparent hover-bg-black hover-white w-100 ba b--near-black"
                    type="text"/>
                  </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6 black b" htmlFor="date-of-birth">Date of Birth</label>
                  <input
                    onChange={this.onDOBChange}
                    placeholder="1995-10-26"
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 ba b--near-black"
                    type="date"
                    name="date"
                    id="date-of-birth"/>
                  </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmitInput}
                  className="b pa3 pv1 input-reset ba b--near-black black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Generate Report"/></div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default Calculator;
