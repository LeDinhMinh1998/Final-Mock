import React, { Component } from 'react';
import './Image.scss'

class Test extends Component {
    render() {
        return (
            <div className="body-img">
                <div className="img-text">Welcome to my movie theater!</div>
                <img className="test-image" src="/images/avengers_background.jpg" alt="image1" />
            </div>
        );
    }
}

export default Test;