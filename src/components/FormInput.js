import React, { Component } from 'react';


class FormInput extends Component {
  // constructor(props){
  //   super(props)
  //   // this.state={
  //   //   type: this.props.type || "text"
  //   // }
  // }


  render() {
    return(
      <div className="form-group">
      <label
        htmlFor={this.props.name}
        className='control-label'
      >
        {this.props.label}
      </label>
      <input
        name={this.props.name}
        value={this.props.field}
        className='form-control'
        type={this.props.type}
      />
    </div>

    )

  }

}

export default FormInput
