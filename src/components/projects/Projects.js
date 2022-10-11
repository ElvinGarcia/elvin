import React, { Component } from "react"
import Github from "./github/Github";
// import Codepen from "./codepen/Codepen";
import PageTitle from "./page_title/PageTitle";

class Projects extends Component{
  render() {
    return (
      <section className="Projects">
        <PageTitle />
        <Github />
        {/* <Codepen /> */}
      </section>
    )
  }
}


export default Projects;