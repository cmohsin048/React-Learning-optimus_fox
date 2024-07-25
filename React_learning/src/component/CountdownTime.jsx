import React, { useState, useEffect, useRef } from 'react';

const CountdownTimer = () => {
  const [endDate, setEndDate] = useState('2024-12-31T00:00:00');
  const [inputDate, setInputDate] = useState('2024-12-31T00:00:00');
  const [timeLeft, setTimeLeft] = useState({});
  const [isActive, setIsActive] = useState(true);
  const timerRef = useRef(null);

  const handleChange = (e) => {
    setInputDate(e.target.value);
  };

  const handleSetDate = () => {
    setEndDate(inputDate);
    setIsActive(true)
  };

  const calculateTimeLeft = () => {
    const targetDate = new Date(endDate);
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const updateTimer = () => {
    setTimeLeft(calculateTimeLeft());
  };

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(updateTimer, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isActive, endDate]);

  const resetTimer = () => {
    setIsActive(false);
    setEndDate(new Date().toISOString()); // Setting to current time for reset effect
    setTimeLeft({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  };

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] === 0) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="time-box">
        <span className="time-value">{timeLeft[interval]}</span>
        <span className="time-label">{interval}</span>
      </div>
    );
  });
  
  return (
    <div className="countdown">
      <div className="input-container">
        <input
          type="datetime-local"
          value={inputDate}
          onChange={handleChange}
        />
        <button onClick={handleSetDate}>Set End Date</button>
      </div>

      <h1>Remaining Time</h1>
      <div className="timer">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
      <div className="controls">
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? 'Pause' : 'Resume'}
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
