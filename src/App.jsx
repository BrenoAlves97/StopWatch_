import { useEffect, useState } from "react";

import { Button } from "./components/Button";

import "./App.css";

import Watch from "./assets/stopwatch.png";

const App = () => {
  const [timer, setTimer] = useState(null);
  const [time, setTime] = useState(0);
  const [buttonTitle, setButtonTitle] = useState("Iniciar");

  const handleStartAndStop = () => {
    if (timer === null) {
      setTimer(
        setInterval(() => {
          setTime((prevState) => (prevState += 0.1));
        }, 100)
      );

      setButtonTitle("Parar");
    } else {
      clearInterval(timer);
      setTimer(null);
      setButtonTitle("Reiniciar");
    }
  };

  const handleResetTime = () => {
    if (time > 0.0 && buttonTitle === "Reiniciar") {
      setTime(0);
      setButtonTitle("Iniciar");
    }
  };

  return (
    <div className="app_container">
      <div className="app-content">
        <img src={Watch} alt="Cronômetro" />
        <h2 className="time">{time.toFixed(1)}</h2>
      </div>
      <div className="buttons-container">
        <Button handleClick={handleStartAndStop}>{buttonTitle}</Button>
        <Button handleClick={handleResetTime}>Zerar</Button>
      </div>
    </div>
  );
};

export default App;
