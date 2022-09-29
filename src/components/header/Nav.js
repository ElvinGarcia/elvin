import React, { Component } from "react";
import NavMenu from './NavMenu';


class Nav extends Component {
  render() {
 const menuItems = [
    {
      name: '[logo]',
      url: '/'
    },
    {
      name: 'Elvin',
      url: '/'
    },
    {
      name: 'Writing',
      url: 'Writing'
    },
    {
      name: 'Speaking',
      url: 'Speaking'
    },
    {
      name: 'Projects',
      url: 'Projects'
    }
  ]
    const menu = menuItems.map((item, index) => (<NavMenu key={index} name={item.name} url={item.url} />))
    return (
      <ul className="nav nav navbar-dark bg-dark">
        {menu}
      </ul>
    );
  };
}


export default Nav