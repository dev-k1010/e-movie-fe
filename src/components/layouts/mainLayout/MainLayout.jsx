import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { HeightProvider } from "../../../context/HeightHeaderContext";
import { ModalProvider } from "../../../context/Modalcontext";
import ModalContainer from "../../modalContainer/ModalContainer";

export default function MainLayout() {
  return (
    <HeightProvider>
      
        <ModalProvider>
          <Header />

          <Outlet />

          <ModalContainer />

          <Footer />
        </ModalProvider>
     
    </HeightProvider>
  );
}
