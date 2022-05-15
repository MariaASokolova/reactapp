import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Moscow" />

        <footer>
          This project was coded by Maria Sokolova and is{" "}
          <a
            href="https://github.com/MariaASokolova/reactapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
        </footer>
      </div>
    </div>
  );
}
