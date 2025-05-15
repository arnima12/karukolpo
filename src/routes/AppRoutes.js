import React from "react";
import { Route, Routes } from "react-router";
import Layout from "../Shared/Layout";
import Home from "../Pages/Home/Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout><Home /></Layout>} />
  </Routes>
  );
};

export default AppRoutes;
