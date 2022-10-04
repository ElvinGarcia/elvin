import React from "react"
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'
import Main from "../components/main/Main";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div className="container">
      <Nav />
      {/* <Outlet /> */}
      <Main />
      <Footer />
    </div>
  );
};

export default Layout