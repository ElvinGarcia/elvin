import React from "react";
import Content from "./Content";

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



  return (

      <div className="greeting_screen">

      <Content

        logo= {elvin}
        greeting={`Hi, I'm Elvin`}
        callToAction={"View my porfolio"}
        alt={'site logo'}
      />
      </div>
 )
}
