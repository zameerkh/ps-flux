import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

function App() {
  const route = window.location.pathname;
  console.log(route);
  if (route === "/about") return <AboutPage />;
  else return <HomePage />;
}

export default App;
