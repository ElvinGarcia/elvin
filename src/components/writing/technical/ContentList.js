
import React from "react";

const ContentList = (props) => {
  return (
    <>
    <div className="writing list">
       <span className="post link" onClick={()=>props.handleContent(props)} >
        <h3 className="post title" > {props.title} </h3>
      </span>
      </div>
    </>
  )
}


export default ContentList;

