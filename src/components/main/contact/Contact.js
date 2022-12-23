import React, { Component } from "react"
import Content from "./Content";
import PageTitle from "../../page_title/PageTitle";
class Contact extends Component{

  render() {
    return (
      <>
      <PageTitle name={ "Say Hello!"} />
      <section className="contact">
        <Content />
        </section>
        </>
    )
  }
}


export default Contact;