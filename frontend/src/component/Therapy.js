import React, { Component } from "react";
import leaves from "../images/TherapyPage/Background Leaves.png";
import movingBot from "../images/TherapyPage/Follow Me.png";

import "../style/therapy.css";

class Therapy extends Component {

    constructor(props) {
        super(props);

        this.state = {
            x: 1,
            up: true
        };

        this.followMe = this.followMe.bind(this);
    }

    followMe() {
        console.log(this.state.x);
        if (this.state.up) {
            if(this.state.x === 89){
                this.setState({
                    up: false
                });
            }
            this.setState({
                x : this.state.x+1
            });
        }
        else{
            if(this.state.x === 0){
                this.setState({
                    up: true
                });
            }
            this.setState({
                x : this.state.x-1
            });
        }
    }

    componentDidMount() {
        (function (d, m) {
            var kommunicateSettings = { "appId": "e052bcb34257f549bcca24df74fbbc4e", "popupWidget": true, "automaticChatOpenOnNavigation": true };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});

        setInterval(this.followMe,100);
    }

    render() {
        return (
            <>
                <div className="row follow">
                    <img className="movingBot" src={movingBot} alt="Moving Bot" style={{ transform: "translateX(" + this.state.x + "em)" }} />
                </div>
                <img className="leaves" src={leaves} alt="leave" />
            </>
        )

    }
}
export default Therapy;

