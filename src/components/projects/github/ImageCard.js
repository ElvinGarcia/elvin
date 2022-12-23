import React from "react";



const ImageCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="overlay">
          <a href={props.url} target="_blank" rel={"noreferrer"} >{props.description}</a>
        </div>
          <div className="title">
          <h1> {props.title} </h1>
          </div>
        <div className="image">
          <img src={props.img} alt="preview" />
          {/* <img src={""} alt="preview" /> */}
        </div>
        <div className="description">
          <p>{props.description} </p>
        </div>
      </div>
    </>

  )

}


export default ImageCard;

