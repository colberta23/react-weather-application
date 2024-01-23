import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
        <footer className="text-center">
          {" "}
          This project is open-sourced by Annie Colbert and is{" "}
          <a
            href="open-sourced"
            target="https://github.com/colberta23/react-weather-application"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
