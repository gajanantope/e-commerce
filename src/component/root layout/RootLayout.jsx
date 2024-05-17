import React from "react";
import Navbar from "../navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
