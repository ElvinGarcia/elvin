import React, { Component } from "react";
import Content from "./Content";


class Presentation extends Component{

  render() {
    const asset= {
      name: "",
      path: "",
      alt: "",
    }

    return (
      <section className="presentation">
        <Content asset={asset} />
      </section>
    )
  }
}


export default Presentation;