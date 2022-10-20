import React from "react"



const Content = (props) => {
 console.log("inside Content props,",props)
  return (
    <section className="technical writing content">
      <h2>Content</h2>
       <div className="writing content ">
        <p>{props.data.content}</p>
      </div>
    </section>

    )



}


export default Content;


