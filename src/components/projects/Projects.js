import React from "react";
import Github from "./github/Github";
import Codepen from "./codepen/Codepen";
import PageTitle from "../page_title/PageTitle";

function Projects(){


    return (
      <main className="main_projects">
        <PageTitle name={"Projects"} />
        <Github />
        <Codepen />
      </main>
    )

}


export default Projects;