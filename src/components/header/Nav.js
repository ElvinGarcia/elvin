import React, { Component } from "react";
import NavMenu from './NavMenu';


class Nav extends Component {
  render() {

    const assets = [
      {
        images: [
           {
              type: 'logo',
            src: './assets/images/elvin.svg',
              alt: 'site logo',
              name: 'Elvin Garcia',
            url: '/',
            }
          ],
        site_links:[
          {
              type:'site_links',
            name: 'Writing',
              url: 'Writing'
            },
          {
            type:'site_links',
              name: 'Resume',
              url: 'Resume'
            },
          {
            type:'site_links',
              name: 'Projects',
              url: 'Projects'
            }
        ],
      }
    ]

    const menu = assets.map((items, id) => (
      <NavMenu images={items.images} site_links={items.site_links} social_links={items.social_links} key={id} />
    )
    );

    return (
      <nav className="nav-menu">
       {menu}
      </nav>
    );
  };
}


export default Nav