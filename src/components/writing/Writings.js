import React, { Component } from "react";
import PageTitle from "../page_title/PageTitle";
import TechnicalWriting from "./technical/TechnicalWriting";

class Writings extends Component{

  render() {
    return (
      <>
        <PageTitle name={"Writing"} />
      <main className="main_writings">
        <TechnicalWriting />
        </main>
        </>
    )
  }
}


export default Writings;



