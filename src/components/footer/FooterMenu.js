import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import UserData from "../../siteData/UserData";


function FooterMenu(props){

  const data = useContext(UserData);
  const user = data && data.user;

    const date = new Date();
    const fullYear = date.getFullYear();

    const images = props.images.map((obj, id) => {
      return obj.type === "logo" ? <div className="footer"> <NavLink to={obj.url} alt={obj.alt} key={id} className="logo">
       <img src={obj.src} alt={obj.alt} />
      </NavLink> </div> : null
    });

    const site_links = props.site_links.map((obj, id) => {
      return obj.type === "site_links" ? <ul className="site_links">  <li className="footer-list-item" key={id}> <NavLink to={obj.url} className="nav-link"> {obj.name}</NavLink> </li> </ul> : null;
    }
    );

    const social_links = props.social_links.map((obj, id) => {
      return obj.type === "social_links" ? <a href={obj.href} name={obj.name} target={"_blank"} rel={"noreferrer"} key={id}>{obj.svg}</a> : null;
    }
    );
    return (
      <>
        {images}
        {site_links}
         <div className="social_links"> {social_links} </div>
        <p className="copyright">All material &#169; {user && user.name} {fullYear}</p>
      </>
    )
  }


export default FooterMenu

