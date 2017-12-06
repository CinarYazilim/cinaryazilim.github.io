import React, { Component } from 'react';
import Block from './Block';
import './Splash.css';

class Splash extends Component {
    render() {
        var {className, ...otherProps} = this.props;
        
        if(className)
            className += " splash";
        else
            className = " splash";

        return (
            <Block className={className} {...otherProps}>
                {this.props.children}
            </Block>
        );
    }
}

export default Splash;
