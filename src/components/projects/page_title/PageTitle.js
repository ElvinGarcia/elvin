import React from "react";
import Content from "./Content";

 const PageTitle = (props) => {
   return (
     <section className="heading">
       <Content name={props.name} />
     </section>

  )
};

 export default PageTitle;