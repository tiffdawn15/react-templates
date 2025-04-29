import React, { useState } from 'react';

export default function Counter() {
    console.log("Rendering Counter");
    const [count, setCount] = useState(0);
    const addOne = () => {
        // Calling setCount is not enough to rerender. React looks for a new value
        setCount(count + 1);
    }
    const addThree = () => {
        // Pass in a function for setCount(). Callback syntax
        // Correct way to update state if you need the previous value of that piece of state 
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);

    }

    return(
        <div>
            <p> Count: {count}</p>
            <button onClick={addOne}>Increment by one</button>
            <button onClick={addThree}>Increment by three</button>

        </div>
    )
}

// NOTES: 
// If you set the state to the same value, React will not rerender the component.