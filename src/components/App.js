import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";

function App() {
  function getPage() {
    const route = window.location.pathname;
    console.log(route);
    if (route === "/about") return <AboutPage />;
    else return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
