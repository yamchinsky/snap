import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Booking from "./Components/Booking";

const APP = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/booking" component={Booking} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}

const prefersColorSchemeWatcher = window.matchMedia("(prefers-color-scheme: dark)");

prefersColorSchemeWatcher.addEventListener("change", () => {
  const favicon = document.querySelector('link[rel="icon"]');
  favicon.href = null;
  favicon.href = "/favicon.svg";
});

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default APP;
