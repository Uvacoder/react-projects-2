import React, { useState } from "react";
import Question from "./Question";
import Data from "./Data";

import "./styles/styles.css";

export default function App() {
  const [questions, setQuestions] = useState(Data);
  return (
    <main className="max-w-lg mx-auto my-10">
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-telcoight">
        Accordion
      </h2>
      <p className="mt-1">
        Building accordion component using{" "}
        <span className="font-mono bg-yellow-200 text-xs p-1 text-black rounded-lg">{`{useState}`}</span>
        .
      </p>
      {questions.map((question) => (
        <Question key={question.id} {...question} />
      ))}
    </main>
  );
}
