import React from "react";



const Content = (props) => {

  const languageSet = () => {
    if (Array.isArray(props.languages) && props.languages.length > 0) {
      return (props.languages.map((language) => {
        return <span className="project language" key={language.language.id} style={{borderColor:language.language.color } }>{language.language.name}</span>
      }))
    } else {
      return <span className="project language"> {props.languages} </span>
    }
  };
  return (
    <div className="project_list">
      <a target="_blank" rel="noreferrer" href={props.url}>
        <h3 className="project title"> {props.title} </h3>
        <p className="project star_count"> ☆ {props.start_count} </p>
        <p className="project description"> {props.description} </p>
        {languageSet()}
      </a>
    </div>
  )

}


export default Content;

