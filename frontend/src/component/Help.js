import  React,{ Component } from "react";
import helpimage from "../images/HelpPage/Help Page1.png";
import '../style/help.css';



class Help extends Component{

    constructor(props){
        super(props);

        this.state = {

        }
        
    }

    render(){
        return(
            <>
                <img className = "HelpImage" src={helpimage} alt = "Help Page content"/>
            </>
        )

    }
}
export default Help;

