import React from "react";
import Content from "./Content";

import { useContext } from "react";
import UserData from "../../siteData/UserData";
import elvin from "../../assets/images/elvin.svg"

import { motion, AnimatePresence } from "framer-motion"

export default function Welcome() {
  <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

  </AnimatePresence>


  const data = useContext(UserData);
  const user = data && data.user;


  return (

      <div className="greeting_screen">
        { user &&
      <Content
        name={user.name}
        logo= {elvin}
        greeting={`Hi, I'm Elvin`}
        callToAction={"View my porfolio"}
        alt={'site logo'}
      />

    }
      </div>
 )
}
