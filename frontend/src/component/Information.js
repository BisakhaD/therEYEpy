import  React,{ Component } from "react";
import infoImage from "../images/Information/Group 27.png"

import "../style/information.css"

class Information extends Component{

    render(){
        return(
            <>
             <img className = "InfoImage" src={infoImage} alt = "Information Page"/>
            </>
        )

    }
}
export default Information;

