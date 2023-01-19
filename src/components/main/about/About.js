import React,{useContext} from "react"
import Content from "./Content";
import profile from "../../../css/assets/images/profile.jpg"
import UserData from "../../../siteData/UserData";
import PageTitle from "../../page_title/PageTitle";

function About(){
    const data = useContext(UserData);
    const user = data && data.user;
    const assets =
      {
        images: {
             type: 'self_portrait',
          //  src: user && user.avatarUrl ,
           src: user && profile ,
             alt: 'self portrait',
             name: user && user.name,
           url: '/',
           },
        content: {
          type: "about_me",
          title:"About Me",
          content:user && user.biography.description.text ,
        }
      }

  return (
    <>
    <PageTitle name={assets.content.title } />
      <section className="about_me">
        <Content assets={assets} />
      </section>
    </>
    )

}


export default About;