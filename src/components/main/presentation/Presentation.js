import React, { Component } from "react";
import Content from "./Content";


class Presentation extends Component{

  render() {
    const asset= {
      name: "tree-lanscape",
      path: "./assets/images/earth-wallpapers.jpg",
      alt: "tree_landscape",
    }

    return (
      <section className="presentation">
        <Content asset={asset} />
      </section>
    )
  }
}


export default Presentation;