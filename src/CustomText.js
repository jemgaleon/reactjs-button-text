import React, { Component } from 'react';
import './CustomText.css';

export class CustomText extends Component {
    render() {
        return (
            <input type='text' 
                placeholder={this.props.placeholder} 
                onKeyDown={this.props.onKeyDown} 
                onChange={this.props.onChange}/>
        );
    }
}