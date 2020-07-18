import React, { Component } from 'react';
import './Body.scss'
import BodyItem from '../BodyItem/BodyItem';
import { filmData } from './../firebaseConnect';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: [],
            status: "Sắp chiếu",
            style1: "btn-1",
            style2: ""
        }
    }

    componentWillMount() {
        filmData.on('value', (films) => {
            var arrayData = [];
            films.forEach(element => {
                const key = element.key;
                const link = element.val().link;
                const status = element.val().status;
                const ticket = element.val().ticket;
                const name = element.val().name
                const content = element.val().content
                arrayData.push({
                    id: key,
                    link: link,
                    status: status,
                    ticket: ticket,
                    name: name,
                    content: content
                })
            });
            this.setState({
                dataFirebase: arrayData
            });
            // console.log(this.state.dataFirebase[0].ticket.v1);
        })
    }

    getData = () => {
        if (this.state.dataFirebase) {
            return this.state.dataFirebase.map((value, key) => {
                if (value.status === this.state.status) {
                    return (
                        <BodyItem
                            key={key}
                            name={value.name}
                            content={value.content}
                            link={value.link}
                            status={value.status}
                            ticket={value.ticket} 
                            film={value} />
                    )
                }
                return true
            })
        }
    }

    test1 = () => {
        this.setState({
            status: "Đang chiếu",
            style1: "",
            style2: "btn-1"
        });
    }
    test2 = () => {
        this.setState({
            status: "Sắp chiếu",
            style1: "btn-1",
            style2: ""
        });
    }

    render() {
        // console.log(this.state.dataFirebase);    
        return (
            <div className="film-container">
                <div className="img-left">
                    <img src="/images/img-left.jpg" alt="image2" />
                </div>
                <div className="img-right">
                    <img src="/images/img-left.jpg" alt="image2" />
                </div>
                <div className="tabview">
                    <div className="list-button">
                        <button onClick={() => this.test2()} className={"button-item " + this.state.style1} >Phim sắp chiếu</button>
                        <button onClick={() => this.test1()} className={"button-item " + this.state.style2} >Phim đang chiếu</button>
                    </div>
                </div>
                <div className="grid">
                    <div className="grid-row">
                        {
                            this.getData()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;