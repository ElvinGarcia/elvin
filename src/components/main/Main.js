import React, { Component } from "react"
import About from "./about/About";
import Contact from "./contact/Contact";
import Welcome from "../splash_screen/Welcome"


class Main extends Component{
  render() {
    return (
      <>
        <Welcome/>
        <About />
        <Contact />
      </>
    )
  }
}


export default Main;