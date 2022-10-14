import React, { Component } from "react"
import Github from "./github/Github";
import Codepen from "./codepen/Codepen";
import PageTitle from "../page_title/PageTitle";

class Projects extends Component{
  render() {
    return (
      <main className="main_projects">
        <PageTitle name={"Projects"} />
        <Github />
        <Codepen />
      </main>
    )
  }
}


export default Projects;