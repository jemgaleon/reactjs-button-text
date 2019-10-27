import React, { Component } from 'react';
import { CustomText } from './CustomText.js';
import { CustomButton } from './CustomButton.js';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Enter button text',
      isValid: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    const targetValue = e.target.value;
    const re = /[^a-zA-Z\d\s]/;

    if ((!e.key.trim() && targetValue.trim().length === 0) || re.test(e.key)) {
      e.preventDefault();
      return;
    }
  }

  handleChange(e) {
    const targetValue = e.target.value || 'Enter button text';

    this.setState({
      value: targetValue
    });
  }

  render() {
    return (
      <div id='app'>
        <CustomText 
          placeholder={this.state.value}
          onKeyDown={this.handleKeyDown} 
          onChange={this.handleChange} />
        <CustomButton text={this.state.value} />
      </div>
    )
  }
}
