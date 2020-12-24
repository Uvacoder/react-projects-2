import React from "react";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Modal from "./Modal";

export default function App() {
  return (
    <div className="h-screen relative">
      <Home />
      <Modal />
      <Sidebar />
    </div>
  );
}
