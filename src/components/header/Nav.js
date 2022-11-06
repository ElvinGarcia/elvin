import React, { useContext } from "react";
import NavMenu from "./NavMenu";
import UserData from "../../siteData/UserData";
import elvin from "../../assets/images/elvin.svg"


function Nav () {

  const data = useContext(UserData);
  const user = data && data.user;

    const assets = [
      {
        images: [
           {
              type: 'logo',
            src: elvin,
              alt: 'site logo',
              name: user && user.name,
            url: '/',
            }
          ],
        site_links: [
          {
            type:'site_links',
              name: 'About',
              url: 'about_me'
            },
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
          },
          {
            type:'site_links',
              name: 'Contact',
              url: 'contact'
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
}


export default Nav