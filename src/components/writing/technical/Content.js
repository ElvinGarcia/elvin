import React from "react";
const Content = (props) => {
  console.log("these are the props,", props)
  return (
    <div className="writing list">
       <a className="post link" target="_blank" rel="noreferrer" href={props.url}>
        <h3 className="post title"> {props.title} </h3>
      </a>
  </div>
  )
}


export default Content;

