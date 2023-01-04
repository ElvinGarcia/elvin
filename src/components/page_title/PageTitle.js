import React from "react";
import Content from "./Content";

 const PageTitle = (props) => {
   return (
     <section className="title">
       <Content name={props.name} />
     </section>

  )
};

 export default PageTitle;