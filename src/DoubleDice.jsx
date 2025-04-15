export default function DoubleDice(){
    const num1 = Math.floor(Math.random() * 3) +  1;
    const num2 = Math.floor(Math.random() * 3) +  1;
    // You can technically move this style to be inline
    const styles = {
        color: num1 === num2 ? "green" : "red",
    }
      return (
        <div className="double-dice" style={styles}>
            <h2>🎲🎲</h2>
            <p>Num 1: {num1}</p>
            <p>Num 2: {num2}</p>

            {/* // Types of conditionals */}
            {num1 === num2 ? <h3>"You Win!"</h3> : null}
            {num1 === num2 && <h3>"You Win!"</h3>} 
         </div>
    )

}  