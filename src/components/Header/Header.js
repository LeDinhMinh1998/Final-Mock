import React, { Component } from 'react';
import './Header.scss'

class Header extends Component {
    render() {
        return (
            <div className="rm-header">
                <div className="rm-header-content">
                    <a href="/"><img className="rm-logo" src="/images/reactMovie_logo.png" alt="rm-logo" /></a>
                    <div className="rm-text">Welcome, You!</div>
                </div>
            </div>
        );
    }
}

export default Header;