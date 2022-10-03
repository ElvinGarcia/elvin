import React, { Component } from "react"
import About from "./about/About";
import Contact from "./contact/Contact";
import Presentation from "./presentation/Presentation";


class Main extends Component{
  render() {
    return (
      <>
        <Presentation/>
        <About />
        <Contact />
      </>
    )
  }
}


export default Main;