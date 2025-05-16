import React from "react";
import { Route, Routes } from "react-router";
import Layout from "../Shared/Layout";
import Home from "../Pages/Home/Home/Home";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import Cart from "../Pages/Cart/Cart";

const AppRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout><Home /></Layout>} />
    <Route path="/category/:categoryName" element={<CategoryPage />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
  );
};

export default AppRoutes;
