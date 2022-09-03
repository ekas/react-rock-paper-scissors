import { useEffect, useState } from "react";

import "./index.less";

interface CounterProps {
  startCount: number | undefined;
  onComplete: () => void;
}

const Counter = ({ startCount, onComplete }: CounterProps) => {
  const [count, setCount] = useState(startCount);
  useEffect(() => {
    if (count && count > 0) {
      const interval = setInterval(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    onComplete();
  });
  return (
    <div className="counter-container">
      <div className="counter-container-circle"></div>
      <div className="counter-container-count">{count}</div>
    </div>
  );
};

export default Counter;
