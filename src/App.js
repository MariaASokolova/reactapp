import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
          <a
            href="https://github.com/MariaASokolova/reactapp"
            className="linktocode"
          >
            Open source by MariaASokolova
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
