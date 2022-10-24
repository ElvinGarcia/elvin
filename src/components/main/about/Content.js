import React from "react";


const Content = (props) => {

    return (
      <>
      <h2> {props.assets.content.title} </h2>
      <div className='about_me info'>
        <p className="content">{props.assets.content.content} </p>
       <div className="image_container"><img src={props.assets.images.src} alt={props.assets.images.alt} className="self_portrait" /></div>
        </div>
        </>
    )

}


export default Content;