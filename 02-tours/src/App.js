import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Refresh from "./Refresh";

import "./styles/styles.css";
const url = "https://course-api.netlify.app/api/react-tours-project";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);
      setTours(tours);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <main className="w-full mx-auto p-7">
      <section className="max-w-xl mx-auto">
        {loading ? (
          <Loading />
        ) : tours.length === 0 ? (
          <Refresh fetchTours={fetchTours} />
        ) : (
          <Tours
            tours={tours}
            removeTour={removeTour}
            fetchTours={fetchTours}
          />
        )}
      </section>
    </main>
  );
}
