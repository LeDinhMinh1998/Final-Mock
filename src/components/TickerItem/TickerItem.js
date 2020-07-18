import React, { Component } from 'react';
import './TickerItem.scss'

class TickerItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "",
            icon: "fas fa-user-times",
            showform: false,
            checkstatus: ""
        }
    }
    componentWillMount() {
        if (this.props.name !== " ") {
            this.setState({
                active: "book-ticket-button-active",
                icon: "fas fa-user-check"
            });
        }
        if (this.props.check === "Đang chiếu") {
            this.setState({
                checkstatus: "book-ticker-button-status"
            });
        }
        // console.log(this.props.check);
    }

    setstate = () => {
        this.setState({
            showform: !this.state.showform
        });
    }

    showForm = () => {
        if (this.state.showform === true) {
            return (
                <div className="modal">
                    <div className="modal-overlay">
                        <div className="form">
                            <div className="chair-name">{this.props.index}</div>
                            <div className="guest-info">
                                <span className="name">Tên</span>
                                <input defaultValue={this.props.name} className="input" type="text"></input>
                                <span className="name">Tuổi</span>
                                <input defaultValue={this.props.age} className="input" type="text"></input>
                                <span className="name">Số điện thoại</span>
                                <input defaultValue={this.props.phone} className="input" type="text"></input>
                                <button className="button" onClick={() => this.setstate()}>Cancel</button>
                                <button className={"button button-save " + this.state.checkstatus} onClick={() => this.setstate()}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setstate()} className={this.state.checkstatus + " book-ticket-button " + this.state.active}>
                    <i className={"icon " + this.state.icon} />
                </button>
                {
                    this.showForm()
                }
            </div>
        );
    }
}

export default TickerItem;