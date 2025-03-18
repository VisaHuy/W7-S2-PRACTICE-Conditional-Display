import React, { useState } from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
  const [weather, setWeather] = useState('');
  const [title, setTitle] = useState('TODO')
  function onSunClick(e) {
    // Complete this code when we click on Sunny Time
    setWeather('yellow');
    setTitle('Sunny Time');
  }

  function onRainClick(e) {
    // Complete this code when we click on Sunny Time
    setWeather('blue');
    setTitle('Rain Time');
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
  }

  return (
    <main style={{backgroundColor: weather}}>
      <h1>{title}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
