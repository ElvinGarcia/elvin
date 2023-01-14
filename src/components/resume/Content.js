import React from "react";
import Pdf from '../../assets/docs/resume.pdf';


const Content = (props) => {
  return (

<object data={Pdf} type="application/pdf" width="300px" height="500px">
    <p>Resume <a href={Pdf}>to the PDF!</a></p>
</object>
    // <section className="resume_content">
    //   <a href = {Pdf} target = "_blank" rel="noreferrer">Download Pdf</a>
    // </section>
)

}


export default Content;

