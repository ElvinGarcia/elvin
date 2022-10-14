import React, { Component } from "react";
import Writing from "./technical/Writing";
import PageTitle from "../page_title/PageTitle";

class Writings extends Component{
  render() {
    return (
      <main className="main_projects">
        <PageTitle name={"Writing"} />
        <Writing />
        <h1>Test Page</h1>
      </main>
    )
  }
}


export default Writings;