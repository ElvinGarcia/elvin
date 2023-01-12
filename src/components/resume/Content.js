import React from "react";
import Pdf from '../../siteData/dev4f_Resume_Personal.pdf';


const Content = (props) => {
  return (

    <section className="resume_content">
      <a href = {Pdf} target = "_blank" rel="noreferrer">Download Pdf</a>
    </section>
)

}


export default Content;

