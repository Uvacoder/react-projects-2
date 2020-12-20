import React, { useState, useEffect } from "react";

import "./styles/styles.css";

const url = "https://course-api.com/react-tabs-project";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    setLoading(true);

    try {
      const res = await fetch(url);
      const newJobs = await res.json();
      setJobs(newJobs);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <main className="max-w-lg mx-auto my-10 flex gap-4">
        <h2>Loading...</h2>
      </main>
    );
  }
  // have to placed here because jobs is an empty array.
  const { company, dates, duties, title } = jobs[value];

  return (
    <main className="max-w-lg mx-auto my-10 md:flex gap-10 px-5">
      <div className="mt-12">
        {jobs.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => setValue(index)}
              className={`hover:bg-purple-100 transition duration-600 ease-in text-xs py-1 px-3  mb-6 md:mb-1 focus:outline-none mr-3 ${
                index === value ? "bg-purple-300" : "bg-purple-200"
              }`}
            >
              {item.company}
            </button>
          );
        })}
      </div>
      <div>
        <h2 className="mb-5 font-light border-b pb-2 text-gray-700">
          Experiences
        </h2>
        <article>
          <div className="text-purple-700 mb-2">{company}</div>
          <h4 className="font-light text-2xl">{title}</h4>

          <time datetime={dates} className="text-gray-400 text-xs">
            {dates}
          </time>
          <ul className="mt-5 list-outside">
            {duties.map((duty, index) => {
              return (
                <li key={index} className="ml-5 list-disc mb-5 text-gray-800">
                  {duty}
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </main>
  );
}
