import React, { Component } from 'react';
import './CustomButton.css';

export class CustomButton extends Component {
    render() {
        return (
            <button>{this.props.text}</button>
        );
    }
}