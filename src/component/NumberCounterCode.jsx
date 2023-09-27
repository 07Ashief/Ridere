import React, { useEffect, useState } from 'react';

const NumberCounter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime;
    let rafId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      setCount(Math.min(Math.floor((progress / duration) * (end - start) + start), end));

      if (progress < duration) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, [start, end, duration]);

  return <span>{count}</span>;
};

export default NumberCounter;


  // in app.js
  //  <div>
  //     <h1>Number Counting Animation</h1>
  //     <NumberCounter start={0} end={100} duration={3000} />
  //   </div> 