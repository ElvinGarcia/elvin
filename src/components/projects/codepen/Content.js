import React  from "react";

const Content = (props) => {

  return (
    <div className="codepen_pen">
       <h3>{props.title}</h3>
        <p>{props.description}</p>
      <a href={props.url} target="_blank" rel="noreferrer"> <button> See Pen </button> </a>
        {props.snippet}
    </div>
)

}


export default Content;