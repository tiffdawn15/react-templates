// Goals: Component Logic with React.memo(), functional state updates, refs for Dom ele that don't re-render
import React, { useState, useRef, useCallback, memo } from "react";
//Counter Component
const CountDisplay = memo(({ count }) => {
  console.log("CountDisplay rendered");
  return <h1> Count{count}</h1>;
});

function Prompt2() {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);

  // Memoize the handleClick function
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

    // Foucs button makes the keyboard focus on the button
    const focusButton = () => {
        if (buttonRef.current) {
          buttonRef.current.focus();
        }
      };

  return (
    <>
      <CountDisplay count={count} />
      {/* setCount is functional stateChange */}
      <button ref={buttonRef} onClick={handleClick}>
        Add One
      </button>
      <button onClick={focusButton}>useRef() Button</button>
    </>
  );
}

export default Prompt2;
