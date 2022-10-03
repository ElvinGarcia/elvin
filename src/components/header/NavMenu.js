import  React,{ Component } from "react";
import { NavLink } from "react-router-dom";

//    type: 'logo',
//   src: './assets/images/elvin.svg',
//   alt: 'site logo',
//   name: 'Elvin',
//   url: '/',
//   svg:svg

class NavMenu extends Component{

  render() {
   const navbarLogo = this.props.images.map((obj, id) => {
     return obj.type === "logo" ? <NavLink to={obj.url} alt={obj.alt} className="nav logo" key={id}>
       {obj.svg}
       <span className="logo">{obj.name}</span>
     </NavLink> : null
   });

    const site_links = (
      <ul className="site_links">
        {
          this.props.site_links.map((obj, id) => {
            if (obj.type === "site_links") {
              return <li key={id} className="list_item"> <NavLink to={obj.url}>{obj.name}</NavLink></li>
            } else {
              return null
            }
          })
        }
      </ul>
    );
    return (
      <>
        {navbarLogo}
        {site_links}
      </>
    );
  };
};


export default NavMenu

