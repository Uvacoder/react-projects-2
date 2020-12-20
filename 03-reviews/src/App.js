import React from "react";
import Review from "./Review";

import { HiChatAlt2 } from "react-icons/hi";
import "./styles/styles.css";

export default function App() {
  return (
    <main className="max-w-sm min-h-70 mx-auto my-10">
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-telcoight">
        Testimonials <HiChatAlt2 className="inline -mt-2" />
      </h2>
      <Review />
    </main>
  );
}
