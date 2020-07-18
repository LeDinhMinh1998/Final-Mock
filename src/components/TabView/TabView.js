import React, { Component } from 'react';
import './TabView.scss'

class TabView extends Component {
    render() {
        return (
            <div className="tabview">
                <div className="list-button">
                    <button className="button-item">Phim sắp chiếu</button>
                    <button className="button-item">Phim đang chiếu</button>
                </div>
            </div>
        );
    }
}

export default TabView;