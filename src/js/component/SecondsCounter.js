import React, { useState, useEffect } from 'react';

const SecondsCounter = (props) => {
  const [seconds, setSeconds] = useState(props.seconds);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (running) {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [running]);

  const Pausa = () => {
    setRunning(false);
  };

  const Continuar = () => {
    setRunning(true);
  };

  const Reset = () => {
    setSeconds(0);
    setRunning(true);
  };

  // Convertir el número de segundos a una cadena y luego a un array de dígitos
  const digits = seconds.toString().padStart(6, '0').split('');

  return (
    <div className='container text-center mt-5'>
      <i className="fa-regular fa-clock"></i>
      {digits.map((digit, index) => (
        <span key={index} className='digit'>{digit}</span>
      ))}
      <div>
        {running ? (
          <button onClick={Pausa}>Pausa</button>
        ) : (
          <button onClick={Continuar}>Continuar</button>
        )}
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
};

export default SecondsCounter;
