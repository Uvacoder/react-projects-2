import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import SubMenus from "./components/SubMenus";

export default function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <SubMenus />
    </>
  );
}
