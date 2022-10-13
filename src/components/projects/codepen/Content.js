import React  from "react";

const Content = (props) => {

  return (
    <div className="codepen pen">
       <h3 className="title">{props.title}</h3>
        <p className="description">{props.description}</p>
      <a href={props.url} target="_blank" rel="noreferrer"> <button> See Pen </button> </a>
        {props.snippet}
    </div>
)

}


export default Content;