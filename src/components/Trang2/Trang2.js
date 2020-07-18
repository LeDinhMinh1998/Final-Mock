import React, { Component } from 'react';
import './Trang2.scss'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TickerItem from '../TickerItem/TickerItem';

class Trang2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            link: "",
            status: "",
            array: []
        }
    }

    componentWillMount() {
        // console.log(this.props.editItem.ticket)
        this.props.editItem.ticket = Object.entries(this.props.editItem.ticket)
        // console.log((this.props.editItem.status));
    }

    getData = () => {
        if (this.props.editItem.ticket) {
            return this.props.editItem.ticket.map((value, key) => {
                value[1] = Object.entries(value[1])
                console.log(value[1]);
                return (
                    <TickerItem
                        key={key}
                        index={value[1][1][1]}
                        name={value[1][2][1]}
                        age={value[1][0][1]}
                        phone={value[1][3][1]}
                        check={this.props.editItem.status}
                    />
                )
            })
        }
    }

    render() {
        // console.log(this.props.editItem.name)
        return (
            <div className="space">
                <div className="header">
                    <Link to={"/"} className="link-home">
                        Home
                    </Link>
                    <span className="seperate">/</span>
                    <span className="seperate">Sonic the Hedgehog</span>
                </div>
                <div className="out-image" style={{ background: 'url("https://kinhnghiemlamnha.vn/wp-content/uploads/2017/05/tieu-chi-chon-gach-viet-nhat-op-tuong-phong-bep-dep-1.png")' }}>
                    <div className="in-content">
                        <img src={this.props.editItem.link}></img>
                        <div className="film-content">
                            <span className="name-film">{this.props.editItem.name}</span><br /><br />
                            <span className="content-film">{this.props.editItem.content}</span>
                            <br />
                            <h4>IMDB RATING</h4>
                            <meter min="0" max="100" optimum="100" low="40" high="70" value="76"></meter>
                            <span> 7.6</span>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="content"><i className="far fa-clock"></i> Running time: 1h 39m</div>
                    <div className="content"><i className="far fa-money-bill-alt"></i> Budget: $85,000,000</div>
                    <div className="content"><i className="fas fa-dollar-sign"></i> Revenue: $265,493,652</div>
                </div>
                <div className="book-ticker">
                    {/* <div className="img-left">
                        <img src="/images/img-left.jpg" alt="image2" />
                    </div>
                    <div className="img-right">
                        <img src="/images/img-left.jpg" alt="image2" />
                    </div> */}
                    <div className="book-ticker-space">
                        <div className="book-ticker-header">
                            MÀN HÌNH XEM
                        </div>
                        <div className="column-left">
                            <div className="column-name">A </div>
                            <div className="column-name">B </div>
                            <div className="column-name">C </div>
                            <div className="column-name">D </div>
                            <div className="column-name">E </div>
                            <div className="column-name">F </div>
                        </div>
                        <div className="column-right">
                            <div className="column-name">A </div>
                            <div className="column-name">B </div>
                            <div className="column-name">C </div>
                            <div className="column-name">D </div>
                            <div className="column-name">E </div>
                            <div className="column-name">F </div>
                        </div>
                        <div className="book-ticker-content">
                            <div className="row">
                                <div className="row-name">1</div>
                                <div className="row-name">2</div>
                                <div className="row-name">3</div>
                                <div className="row-name">4</div>
                                <div className="row-name">5</div>
                                <div className="row-name">6</div>
                                <div className="row-name">7</div>
                                <div className="row-name">8</div>
                            </div>
                            <div className="list-button">
                                {
                                    this.getData()
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => { //Store truyền xuống component
    return {
        editDataStore: (getItem) => {
            dispatch({ type: "EDIT", getItem })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trang2)