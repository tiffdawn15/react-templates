import { useState } from "react";
function generateGameBoard(){
    console.log("Making the initial game board"); 
   return Array(5000)
}
export default function Dumb() {
    // As long as you pass in the name of a function and use as initial state. Future rerenders it will run the function. Only runs one time.  
    const [board, setBoard] = useState(generateGameBoard);
    return <button> Click me to change state</button>
}