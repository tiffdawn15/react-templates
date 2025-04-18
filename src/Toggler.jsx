import { useState } from "react";

export default function Toggler() {
  const [isHappy, setIsHappy] = useState(false);
  const toggleIsHappy = () => {
    setIsHappy(!isHappy);
  };

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  return (
    <>
      <p className="Toggler" onClick={toggleIsHappy}>{isHappy ? ':)' : ':('}</p>
      <p onClick={increment}>Count: {count}</p>
    </>
  );
}
