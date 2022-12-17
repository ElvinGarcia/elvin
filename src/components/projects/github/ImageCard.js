import React from "react";
// import Card from 'react-bootstrap/Card';
import analogClock from "../../../css/assets/images/projects/analogClock.gif"
  // return (
  //   <div className="project_list">
  //     <a target="_blank" rel="noreferrer" href={props.url}>
  //       <h3 className="project title"> {props.title} </h3>
  //       <p className="project star_count"> ☆ {props.start_count} </p>
  //       <p className="project description"> {props.description} </p>
  //       {languageSet()}
  //     </a>
  //   </div>
  // )

const ImageCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="overlay">
        <a href="github.com" target="about_blank">{props.description}</a>
        </div>
          <div className="title">
          <h1> {props.title} </h1>
          </div>
        <div className="image">
          <img src={analogClock} alt="preview" />
        </div>
        <div className="description">
          <p>{props.description} </p>
        </div>
      </div>
    </>

  )

}


export default ImageCard;

