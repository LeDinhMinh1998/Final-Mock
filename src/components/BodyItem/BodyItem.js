import './BodyItem.scss'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class BodyItem extends Component {
    Action = () => {
        this.props.getEditData(this.props.film)
    }
    render() {
        // console.log(this.props.name);
        return (
            <div className="grid-column">
                <div className="space">
                    <Link onClick={() => this.Action()} to={"/info"}>
                        <img src={this.props.link} alt="imagee"></img>
                    </Link>
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
        getEditData: (editObject) => {
            dispatch({
                type: "GET_EDIT_DATA",
                editObject
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyItem)