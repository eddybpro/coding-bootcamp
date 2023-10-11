import { useState, useEffect } from "react";

import "./App.css";
import Card from "./Card";
import { data } from "./data";

function App() {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const ArrowKeys = (event) => {
    if (event.key === "ArrowRight") {
      nextSlide();
    } else if (event.key === "ArrowLeft") {
      prevSlide();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", ArrowKeys);
    return () => {
      document.removeEventListener("keydown", ArrowKeys);
    };
  });
  console.log(current);
  return (
    <main>
      {data.map((el, i) => (
        <Card
          key={i}
          {...el}
          idx={i}
          current={current}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
        />
      ))}
    </main>
  );
}

export default App;
