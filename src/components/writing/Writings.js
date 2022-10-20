import React, { Component } from "react";
import PageTitle from "../page_title/PageTitle";
import TechnicalWriting from "./technical/TechnicalWriting";

class Writings extends Component{

  render() {
    return (
      <main className="main_writings">
        <PageTitle name={"Writing"} />
        <TechnicalWriting />

      </main>
    )
  }
}


export default Writings;



