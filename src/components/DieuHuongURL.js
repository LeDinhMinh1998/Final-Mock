import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Trang2 from './Trang2/Trang2';
import Body from './Body/Body';

class DieuHuongURL extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Body}>
                </Route>
                <Route exact path="/info" component={Trang2}>
                </Route>
            </Router>
        );
    }
}

export default DieuHuongURL;