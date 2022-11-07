import React,{useContext} from "react"
import Content from "./Content";


import UserData from "../../../siteData/UserData";

function About(){

    const data = useContext(UserData);
    const user = data && data.user;

    const assets =
      {
        images: {
             type: 'self_portrait',
           src: user && user.avatarUrl ,
             alt: 'self portrait',
             name: user && user.name,
           url: '/',
           },
        content: {
          type: "about_me",
          title:" About Me",
          content:user && user.biography.description.text ,
        }
      }

    return (
      <section className="about_me">
        <Content assets={assets} />
      </section>
    )

}


export default About;