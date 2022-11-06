import React from "react";
import Content from "./Content";

import { useContext } from "react";
import UserData from "../../siteData/UserData";
import elvin from "../../assets/images/elvin.svg"


export default function Welcome() {


  const data = useContext(UserData);
  const user = data && data.user;


  return (
      <div className="greeting_screen">
        { user &&
      <Content
        name={user.name}
        logo= {elvin}
        greeting={`Hi, I'm ${user.name}.`}
        callToAction={"View my porfolio"}
        alt={'site logo'}
      />

    }
      </div>
 )
}
