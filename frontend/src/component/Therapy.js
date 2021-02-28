import React, { Component } from "react";
import leaves from "../images/TherapyPage/Background Leaves.png";
import movingBot from "../images/TherapyPage/Follow Me.png";

import "../style/therapy.css";


const axios = require('axios').default;

class Therapy extends Component {

    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            up: true,
            start: false,
            gaze: "default",
            count: 0

        };

        this.followMe = this.followMe.bind(this);
        this.startMovement = this.startMovement.bind(this);
        this.stopMovement = this.stopMovement.bind(this);
        this.checkPosition = this.checkPosition.bind(this);
    }

    checkPosition() {
        const thisObj = this;
        axios.get('http://localhost:5000/checkmovement')
            .then((resp) => {
                console.log(resp);
                if (!this.state.up && (resp.data !== 'right')) {
                    thisObj.setState({
                        count: thisObj.state.count + 1
                    });
                }
                else if (this.state.up && (resp.data !== 'left')) {
                    thisObj.setState({
                        count: thisObj.state.count + 1
                    })
                }
                else {
                    thisObj.setState({
                        count: 0
                    })
                }
                thisObj.setState({
                    start: true,
                    gaze: resp.data
                })
                console.log("Count : ", thisObj.state.count);
            })
            .catch((err) => {
                console.log(err);
                thisObj.setState({
                    start: true
                })
            })
    }

    followMe() {
        if (this.state.up && this.state.start) {
            if (this.state.x === 89) {
                this.setState({
                    up: false,
                    start: false
                });
                this.checkPosition()
            }
            this.setState({
                x: this.state.x + 1
            });
        }
        else if (this.state.start) {
            if (this.state.x === 0) {
                this.setState({
                    up: true,
                    start: false
                });
                this.checkPosition()
            }
            this.setState({
                x: this.state.x - 1
            });
        }
    }

    startMovement() {
        this.setState({
            start: true
        })
    }

    stopMovement() {
        this.setState({
            start: false
        });
        axios.get('http://localhost:5000/stopCapturing')
            .then((resp) => { })
            .catch((err) => { })
    }

    componentDidMount() {
        (function (d, m) {
            var kommunicateSettings = { "appId": "e052bcb34257f549bcca24df74fbbc4e", "popupWidget": true, "automaticChatOpenOnNavigation": true };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});

        setInterval(this.followMe, 100);
    }

    render() {
        return (
            <>
                <div className="row follow">
                    <img className="movingBot" src={movingBot} alt="Moving Bot" style={{ transform: "translateX(" + this.state.x + "em)" }} />
                </div>
                <div className="row" style={{ marginTop: "1rem" }}>
                    <div style={{ marginLeft: "2rem" }}>
                        <button type="button" class="btn btn-primary" style={{ background: "#6b9b79" }} onClick={this.startMovement}>
                            Start
                    </button>
                    </div>
                    <div style={{ marginLeft: "1rem" }}>
                        <button type="button" class="btn btn-primary" style={{ background: "#6b9b79" }} onClick={this.stopMovement}>
                            Stop
                    </button>
                    </div>
                </div>
                <div className="row" style={{ margin: "1rem" }}>
                    You are looking : {this.state.gaze}
                </div>
                {(this.state.count >= 2)?
                    <div>
                        You seemed to have got lost in your past.<br />
                        Take a break and play a game if you are feeling overwhelmed
                    </div>
                    :
                    null
                }
                <img className="leaves" src={leaves} alt="leave" />
            </>
        )

    }
}
export default Therapy;

