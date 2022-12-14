import React from "react";
import Github from "./github/Github";
// import Codepen from "./codepen/Codepen";
import PageTitle from "../page_title/PageTitle";

function Projects(){


  return (
      <>
      <PageTitle name={"Projects"} />
      <main className="main_projects">
        {/* <Codepen /> */}
        <Github />
      </main>
      </>
    )

}


export default Projects;