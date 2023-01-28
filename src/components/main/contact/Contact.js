import React, { Component } from "react"
import Content from "./Content";
import PageTitle from "../../page_title/PageTitle";
import Calendly from "../../calendly/Calendly";




class Contact extends Component{
  render() {
    return (
      <>
      <PageTitle name={ "Say Hello!"} />
      <section className="contact">
          <Content />
          <Calendly/>
        </section>
        </>
    )
  }
}


export default Contact;