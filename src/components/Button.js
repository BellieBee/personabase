import React from "react";
import "./styles/Button.css"
import sugufondoImg from "../images/sugufondo.jpg"
import { Link } from 'react-router-dom'

//function en Javascript moderno
const Button = (props) => (
    <div className="container">
            <div className="Fitness-User-Info">
                <Link to={props.link} className="btn btn-info Btn-Dash" style={{backgroundImage:`url(${sugufondoImg})`}}>
                    {props.nameButton}
                </Link>
            </div>
        </div>
)

/*function Button(props) {
    return (
        <div className="container">
            <div className="Fitness-User-Info">
                <Link to={props.link} className="btn btn-info Btn-Dash" style={{backgroundImage:`url(${sugufondoImg})`}}>
                    {props.nameButton}
                </Link>
            </div>
        </div>
    )
}*/

export default Button