import React from "react";
import { useGlobalContext } from "./Context";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

export default function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="flex h-screen w-full justify-center items-center">
        <h1 className="animate-bounce font-bold text-3xl text-gray-300">
          Loading...
        </h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
