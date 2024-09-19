import React, { useState, useEffect } from 'react';

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="countdown-timer text-center text-white py-10 bg-bg_black">
      <h2 className="text-6xl  text-bright_green font-bold mb-10">Countdown</h2>
      <div className="text-4xl border-[3px] border-bright_green py-10 rounded-[50px] mx-56 font-semibold">
        <span className="px-2">{String(days).padStart(2, '0')} days</span>
        <span className="px-2">{String(hours).padStart(2, '0')} hours</span>
        <span className="px-2">{String(minutes).padStart(2, '0')} minutes</span>
        
      </div>
    </div>
  );
}

export default CountdownTimer;
