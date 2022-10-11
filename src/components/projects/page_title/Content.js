import React from "react";


export default function Content(props){
  return(
  <>
      <h1 className="page_heading">{props.name}</h1>
    <div className="page_blurb">
    <p className="social_links">
      {/* <a href={props.url} target="_blank" rel="noreferrer">{props.service}</a> */}
        <br />
        {/* <a href={props.url} target="_blank" rel="noreferrer">{props.service}</a> */}
      </p>
      </div>
    </>
    )
}