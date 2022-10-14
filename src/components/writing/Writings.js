import React, { Component } from "react";
import Writing from "./technical/Writing";
import PageTitle from "../page_title/PageTitle";

class Writings extends Component{
  render() {
    return (
      <main className="main_writings">
        <PageTitle name={"Writing"} />
        <Writing />
      </main>
    )
  }
}


export default Writings;