import React, { Component } from 'react';
import './Form.scss'
import { connect } from 'react-redux';

class Form extends Component {
    render() {
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
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)