import React from "react";
import { useLocation } from "react-router";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  const location = useLocation();

  const showNavbar = location.pathname !== '/';

  return (
    <>
      <Navbar/>
      <main>{children}</main>
    </>
  );
};

export default Layout;
