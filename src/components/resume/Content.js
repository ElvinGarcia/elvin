import React from "react";


const Content = (props) => {
  const src="https://docs.google.com/document/d/18Em-uTKuPkMoNZWt_l2GjSm3kw0OTdl6944SjNOOljg/edit?usp=sharing&includes_info_params=true"
  return (
    <section className="resume_content">
      <embed
        type="application/pdf"
        title="Resume"
       src={src}
       width="818"
        height="999">

       </embed>
    </section>
)

}


export default Content;

