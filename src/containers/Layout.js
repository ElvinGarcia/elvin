import React from "react"
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'
import { Outlet } from "react-router-dom";
// Framer-motion
import { motion } from "framer-motion"



const Layout = () => {
  return (
    <motion.div className="container">
      <Nav />
      <Outlet />
      <Footer />
    </motion.div>
  );
};

export default Layout