import React, { Component } from 'react';
import './SearchBar.scss'

class SearchBar extends Component {
    render() {
        return (
            <div className="rm-searchbar">
                <div className="rm-searchbar-content">
                    <i className="fas fa-search rm-fa-search" />
                    <input
                        onChange={(event) => this.isChange(event)}
                        type="text"
                        className="rm-searchbar-input"
                        placeholder="Search"
                    />
                </div>
            </div>
        );
    }
}

export default SearchBar;