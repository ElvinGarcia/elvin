import  React,{ Component } from "react";
import { NavLink } from "react-router-dom";

//    type: 'logo',
//   src: './assets/images/elvin.svg',
//   alt: 'site logo',
//   name: 'Elvin',
//   url: '/',

class NavMenu extends Component{

  render() {
   const navbarLogo = this.props.images.map((obj, id) => {
     return obj.type === "logo" ? <NavLink to={obj.url} alt={obj.alt} className="nav logo" key={id}>
       <img src={obj.src} alt={obj.alt} />
       <span className="logo-name">{obj.name}</span>
     </NavLink> : null
   });

    const site_links = (
      <ul className="site_links">
        {
          this.props.site_links.map((obj, id) => {
            if (obj.type === "site_links") {
              return <li key={id} className="list_item"> <NavLink to={obj.url}>{obj.name}</NavLink></li>
            } else if (obj.type === 'resume') {
          return <li key={id} className="list_item external_link"> <a href='https://docs.google.com/document/d/e/2PACX-1vRhYiDEctLPU0buQvLxKAhTlROpN9-e1EAzXNU-qYBkVIhz2bkFQN6FdAQIJyVH_p9qQwBUrPLzQw1T/pub' target='_blank' rel='noopener noreferrer'>{obj.name} {obj.component} </a></li>
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

