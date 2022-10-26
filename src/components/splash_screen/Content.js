import React from "react";
import { Link } from "react-router-dom";


export default function Content(props) {
  console.log(props)

  return (
    <div className="greeting_screen">
      <img className="logo" src={props.logo} alt={props.alt}></img>
       <div className="greeting_container">
        <p className="greeting"> {props.greeting} </p>
        <Link className="call_to_action">{props.callToAction}</Link>
        </div>
      </div>

  )


}