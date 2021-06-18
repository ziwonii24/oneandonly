import React from "react";
import { Link, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/test">let's test</Link>
      </header>
      <main>
        <Route path="/test" component={Test} />
      </main>
    </div>
  );
}

const Test: React.FC = () => {
  return <div>test</div>;
};

export default App;
