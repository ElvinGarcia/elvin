import React, { useContext } from "react"
import FooterMenu  from "./FooterMenu";

import UserData from "../../siteData/UserData";


function Footer () {

  const data = useContext(UserData);
  const user = data && data.user;

    const assets = [
      {
        images: [

          ],
        site_links:[
        ],
        social_links: [
          {
            type:"social_links", href: user && user.githubUrl , name: "github", svg: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" aria-labelledby="github" role="presentation" data-v-0020ee1f=""><title id="github" lang="en">github</title> <path fill="currentColor" d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
            </svg>
          },

          {
            type:"social_links", href: "https:www.codepen.io/elvingarcia", name: "codepen", svg: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" aria-labelledby="codepen" role="presentation" data-v-0020ee1f=""><title id="codepen" lang="en">codepen</title> <path fill="currentColor" d="M29.555 11.501l-14-9.333c-0.336-0.224-0.774-0.224-1.109 0l-14 9.333c-0.278 0.185-0.445 0.498-0.445 0.832v9.333c0 0.334 0.167 0.647 0.445 0.832l14 9.333c0.168 0.112 0.361 0.168 0.555 0.168s0.387-0.056 0.555-0.168l14-9.333c0.278-0.185 0.445-0.498 0.445-0.832v-9.333c0-0.334-0.167-0.647-0.445-0.832zM15 20.465l-5.197-3.465 5.197-3.465 5.197 3.465-5.197 3.465zM16 11.798v-6.93l11.197 7.465-5.197 3.465-6-4zM14 11.798l-6 4-5.197-3.465 11.197-7.465v6.93zM6.197 17l-4.197 2.798v-5.596l4.197 2.798zM8 18.202l6 4v6.93l-11.197-7.465 5.197-3.465zM16 22.202l6-4 5.197 3.465-11.197 7.465v-6.93zM23.803 17l4.197-2.798v5.596l-4.197-2.798z"></path>
            </svg>
          }
        ]
      }
    ]

    const menu = assets.map((items, id) => (
      <FooterMenu images={items.images} site_links={items.site_links} social_links={items.social_links} key={id} />
    )
    );

    return (
      <footer className="footer">
        {menu}
      </footer>
    );
}

export default Footer