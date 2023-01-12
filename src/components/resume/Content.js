import React from "react";
import Pdf from '../../siteData/dev4f_Resume_Personal.pdf';


const Content = (props) => {
  return (

    <section className="resume_content">
      <a href = {Pdf} target = "_blank" rel="noreferrer">Download Pdf</a>
      {/* <iframe src="https://docs.google.com/document/d/e/2PACX-1vRhYiDEctLPU0buQvLxKAhTlROpN9-e1EAzXNU-qYBkVIhz2bkFQN6FdAQIJyVH_p9qQwBUrPLzQw1T/pub?embedded=true" height="990" width="100%;" scrolling="no" title="Resume" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen= {true}>
</iframe> */}
    </section>
)

}


export default Content;

