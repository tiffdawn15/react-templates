import { useState, useEffect } from "react";

export default function Counter() {
 const [count, setCount] =  useState(0); 
 const [name, setName] = useState("");

 // Pass in which variables that need to update the effect 
 // Passing in an empty array tells use effect that it should only run on mount  
useEffect(function myEffect(){
    console.log("useEffect ran");
}, [count]);

 const increment = () => {
   setCount((currCount) => currCount + 1);
 };

 const handleChange = (e) => {
    setName(e.target.value);
 }; 

 return (
    <div>
        <h1>{count}</h1>
        
        <button onClick={increment}>+ 1</button>
        <p>Name: {name}</p>
        <input type="text" />

    </div>
 )
}