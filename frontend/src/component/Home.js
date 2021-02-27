import React, { Component } from "react";

import homeImage from "../images/HomePage_main/Group 23.png";
import '../style/home.css';

class Home extends Component {

    render() {
        return (
            <>
                <img className = "HomeImage" src={homeImage} alt = "Home Page content"/>
            </>
        )
    }
}
export default Home;

