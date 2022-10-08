import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class FooterMenu extends Component{
  render() {
    const date = new Date();
    const fullYear = date.getFullYear();

    const images = this.props.images.map((obj, id) => {
      return obj.type === "logo" ? <NavLink to={obj.url} alt={obj.alt} key={id} className="logo">{obj.svg}</NavLink> : null
    });

    const site_links = this.props.site_links.map((obj, id) => {
      return obj.type === "site_links" ? <li className="footer-list-item" key={id}> <NavLink to={obj.url} className="nav-link"> {obj.name}</NavLink> </li> : null;
    }
    );

    const social_links = this.props.social_links.map((obj, id) => {
      return obj.type === "social_links" ? <NavLink to={obj.href} name={obj.name} key={id}>{obj.svg}</NavLink> : null;
    }
    );
    return (
      <>
        <div className="footer">{images}</div>
        <ul className="site_links">{site_links}</ul>
        {/* <hr className="footer divider"></hr> */}
        <div className="social_links">{social_links} </div>
        <p className="copyright">All material &#169; Elvin Garcia {fullYear}</p>
      </>
    )
  }


  }


export default FooterMenu