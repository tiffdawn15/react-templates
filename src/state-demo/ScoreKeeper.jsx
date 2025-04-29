import { useState } from "react";

function ScoreKeeper(){
    const [score, setScores] = useState({p1Score: 0, p2Score: 0});
    function increaseP1Score(){
        setScores({
            ...score, 
            p1Score: score.p1Score + 1
        })
    };
    function increaseP2Score(){
        setScores({
            ...score, 
            p2Score: score.p2Score + 1
        })
    };
    return (
        <div>
            <p>Player1 {score.p1Score}</p>
            <p>Player2 {score.p2Score}</p>
            <button onClick={increaseP1Score}> +1 Player 1</button>
            <button onClick={increaseP2Score}> +1 Player 2</button>

        </div>
    )
}


export default ScoreKeeper;
