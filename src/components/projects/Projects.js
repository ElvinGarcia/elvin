import React from "react";
import Github from "./github/Github";
import PageTitle from "../page_title/PageTitle";

function Projects(){


  return (
      <>
      <PageTitle name={"Projects"} />
      <main className="main_projects">
        <Github />
      </main>
      </>
    )

}


export default Projects;