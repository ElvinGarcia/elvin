import React from "react";



const Content = (props) => {

  return (

    <div className="project_list">
      <a target="_blank" rel="noreferrer" href={props.url}>

        <h3> {props.title} </h3>
          <p> ☆ {props.start_count} </p>
        <p> {props.description} </p>
        <span>
          {/* returns the languages set on the repo */}
          {Array.isArray(props.languages) && props.languages > 0 ? props.languages.forEach((lang) => { return (lang + ', ') }) : props.languages }
        </span>
      </a>
      <hr/>
    </div>
)

}


export default Content;