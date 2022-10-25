import React from "react";
import { Link } from "react-router-dom";


export default function Content(props) {

  return (
    <div className="greeting_screen">
      <img className="logo" src={props.logo.src} alt={props.logo.alt}></img>
      <p className="greeting"> {props.greeting} </p>
       <Link className="call_to_action">{props.callToAction}</Link>
      </div>

  )


}