import React  from "react";
import { NavLink } from "react-router-dom";

const Content = () => {

  return (
    <div className="project_list">
      <h3> {this.props.project.title} </h3>
      <p> {this.props.description} </p>
      <NavLink to={this.props.project.url}>See Pen</NavLink>
      <code>Preview goes here</code>
    </div>
)

}


export default Content;