import React, { useState, useEffect } from "react";

function Prompt1() {
  const [color, setColor] = useState("red");

  // 4 Types of useEffect:
    // 1. Initialization
  // UseEffect only runs once when the component mounts
  // api calls, subscriptions, logs on initilization
  useEffect(() => {
    console.log("mounted");
  }, []);

  // 2. State Change
  // run code when specific state changes
  // reacting to changes in state or props

  useEffect(() => {
    console.log("mounted");
    // UseEffect only runs once when the component mounts
  }, [color]);

  // 3. Cleanup
  // cleanup resources when component unMounts or before the effect
  // removing event listeners, cancelling api calls, clearing timers
  //   useEffect(() => {
  //     console.log("Color changed to:", color);
  //     // This effect runs every time the color state changes
  //   }, 1000);
  //   return () => {
  //     clearInteraval(timer);
  //     console.log("Cleanup function called");
  //   }, [];

  // 4. No Dependency Array
  // No dependency array then it runs after every render
  // Logging, debugging
  useEffect(() => {
    console.log("Component rendered");
  });

  return (
    <>
      <h1>My favorite color is {color}!</h1>

      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>

      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
    </>
  );
}

export default Prompt1;
