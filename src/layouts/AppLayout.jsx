import React from "react";
import NavBar from "../component/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import { CartProvider } from "../context/CartContext";
import ScrollToTop from "../component/scroll_to_top/ScrollToTop";

const AppLayout = () => {
  return (
    <CartProvider>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </CartProvider>
  );
};

export default AppLayout;
