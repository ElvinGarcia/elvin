import React from "react";


const Content = (props) => {
  const src="https://docs.google.com/document/d/18Em-uTKuPkMoNZWt_l2GjSm3kw0OTdl6944SjNOOljg/edit?usp=sharing&includes_info_params=true"
  return (
    <section className="resume_content">
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vRhYiDEctLPU0buQvLxKAhTlROpN9-e1EAzXNU-qYBkVIhz2bkFQN6FdAQIJyVH_p9qQwBUrPLzQw1T/pub?embedded=true" height="990" width="100%;" scrolling="no" title="Resume" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen= {true}>
</iframe>
    </section>
)

}


export default Content;

