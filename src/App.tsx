import React from "react";
import logo from "./logo.svg";
import { useQuery, gql } from "@apollo/client";
import "./App.css";

const query = gql`
  query {
    postCollection {
      items {
        title
        body
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(query);
  console.log(data);
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
      </header>
    </div>
  );
}

export default App;
