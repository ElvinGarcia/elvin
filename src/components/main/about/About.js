import React, { Component } from "react"
import Content from "./Content";

class About extends Component{

  render() {
    const assets =
      {
        images: {
             type: 'logo',
           src: './assets/images/elvin.svg',
             alt: 'site logo',
             name: 'Elvin',
           url: '/',
           },
        content: {
          type: "about_me",
          title:" About Me",
          content:"Elvin Garcia is an award-winning Speaker, VP of Developer Experience at Netlify, Vue core team member, and Staff Writer at CSS-Tricks. Sarah is formerly Principal Lead of Emerging Markets, Cloud Advocates at Microsoft and Manager of UX & Engineering at Trulia/Zillow Group. She’s the author of SVG Animations from O’Reilly and has given Frontend Masters workshops. Sarah is a co-organizer of ConcatenateConf, a free conference for Nigerian and Kenyan developers. Sarah is also the co-founder of Web Animation Workshops with Val Head. She has worked for 15 years as a web developer, and at points worked as a Scientific Illustrator and a Professor in the Greek Islands.",
        }
      }

    return (
      <section className="about_me">
        <Content assets={assets} />
      </section>
    )
  }
}


export default About;