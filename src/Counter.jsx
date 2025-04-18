import { useState } from "react";

export default function Counter() {
    const [num, setNum] = useState(0);
    function incrememt() {
        setNum(num + 1);
    }
   
    return (
       <div>

        <p>Current count: {num}</p>
        <button onClick={incrememt} ></button>
        </div>
    )
}    