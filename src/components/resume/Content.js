import React from "react";


const Content = (props) => {
  const src="https://docs.google.com/document/preview?format=pdf&id=1wzaO2Gyj3A74_ZuMbsa66Pz-YBm09Fn3p4BAgBEBISs&includes_info_params=true"
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

