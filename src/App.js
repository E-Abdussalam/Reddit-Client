import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./features/Header/Header";
import Home from "./features/Home/Home";
import Subreddits from "./features/Subreddits/Subreddits";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </>
  );
}

export default App;
