import React from "react";
import { Link } from "react-router-dom";


export default function Content(props) {

  return (
    <div className="content">
      <img className="logo" src={props.logo} alt={props.alt}></img>
       <div className="greeting_container">
        <h1 className="greeting"> {props.greeting} </h1>
        <Link className="call_to_action" to={'about_me'} >{props.callToAction}</Link>
        </div>
      </div>

  )


}