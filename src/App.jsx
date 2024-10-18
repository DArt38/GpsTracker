import { useState } from "react";
import satelite from "./assets/satellite.svg";
import MapView from "./components/MapView";
import "./App.css";

function App() {
  return (
    <>
      <div className="background">
        <a href="https://react.dev" target="_blank">
          <img src={satelite} className="satellite" alt="Logo satelite"></img>
        </a>
        <h1>Gps Tracker Web</h1>
      </div>
      <MapView />
      <p className="read-the-docs">Agradecimientos a dArt</p>
    </>
  );
}

export default App;
