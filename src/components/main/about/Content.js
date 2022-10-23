import React from "react";


const Content = (props) => {

    return (
      <>
      <h2> {props.assets.content.title} </h2>
      <div className='about_me'>
       <img src={props.assets.images.src} alt={props.assets.images.alt} className="self_portrait" />
        <p className="content">{props.assets.content.content} </p>
        </div>
        </>
    )

}


export default Content;