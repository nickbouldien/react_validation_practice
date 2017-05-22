import React, { Component } from 'react';
import Header from './components/Header'
import FormInput from './components/FormInput';
import registrationStore from './store/RegistrationStore';
//import {formInputChange} from './actions/Actions'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      registration:registrationStore.getFields(),
      errors: {}
    }
  }

  handleChange(event){
    const target = event.target
    // debugger;
    const registration = this.state.registration
//    formInputChange(target.name, target.value) // took out???
    registration[target.name] = target.value
    this.setState({
      registration: registration
    })
  }

  validate(){
    registrationStore.validate()
    this.setState({errors: registrationStore.getErrors()})
  }

// uncoment this.validate below
  handleSubmit(event){
    event.preventDefault()
    this.validate()
    console.log(this.state.registration)
      //this.validate()
  }

  isValid(){
    return Object.keys(this.state.errors).length === 0
  }

  componentWIllMount(){
    registrationStore.on('change', this.handleUpdate.bind(this))
  }

  handleUpdate(){
    this.setState({
      registration: registrationStore.getFields(),
      errors: {}
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='row'>
            <div className='col-xs-6 col-xs-offset-3'>
              <div className='panel panel-default'>
                <div className='panel-body'>

                  {!this.isValid() &&
                    <div className='aler alert-dange'>
                      verify all fields filled in correctly
                    </div>
                  }

                  <h3>Registration</h3>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className='row'>

                      <div className='col-xs-12'>
                          <FormInput
                            name="firstName"
                            label="First Name"
                            value={this.state.registration.firstName}
                            onChange={this.handleChange.bind(this)}
                            errors={this.state.errors.firstName}
                          />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-12'>

                          <FormInput
                            name="lastName"
                            label="Last Name"
                            value={this.state.registration.lastName}
                            onChange={this.handleChange.bind(this)}
                            errors={this.state.errors.lastName}
                          />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-12'>

                          <FormInput
                            name="email"
                            label="Email"
                            value={this.state.registration.email}
                            onChange={this.handleChange.bind(this)}
                            errors={this.state.errors.email}
                          />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-12'>
                        <FormInput
                          name="password"
                          label="Password"
                          type="password"
                          value={this.state.registration.password}
                          onChange={this.handleChange.bind(this)}
                          errors={this.state.errors.password}
                        />

                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-12'>
                        <input className='btn btn-primary' type='submit' value='Submit' />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className="col-xs-4 col-xs-offset-4">
            <ul className='list-group'>
              <li className='list-group-item'>First Name: {this.state.registration.firstName}</li>
              <li className='list-group-item'>Last Name: {this.state.registration.lastName}</li>
              <li className='list-group-item'>Email: {this.state.registration.email}</li>
              <li className='list-group-item'>Password: {this.state.registration.password}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
