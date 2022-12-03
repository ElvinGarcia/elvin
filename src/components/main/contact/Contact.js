import React, { Component } from "react"
import Content from "./Content";
import PageTitle from "../../page_title/PageTitle";
class Contact extends Component{

  render() {
    return (
      <section className="contact">
        <PageTitle name={ "Say Hello!"} />
        <Content />
      </section>
    )
  }
}


export default Contact;