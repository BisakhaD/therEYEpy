import React, { Component } from "react";
import logo from '../images/Icon.png';

import "../style/navbar.css";

import { Link } from "react-router-dom";

class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        return (
            <div className="row navbar">
                <div className="logo col-1">
                   <Link to='/'> <img src={logo} alt="logo" /></ Link>
                </div>
                <div className="options row col-11 justify-content-end my-auto">
                    <div><Link to='/'>Home</Link></div>
                    <div><Link to='/information'>Information</Link></div>
                    <div><Link to='/therapy'>Therapy</Link></div>
                    <div><Link to='/help'>Help</Link></div>
                </div>
            </ div>
        )

    }
}
export default Navbar;

