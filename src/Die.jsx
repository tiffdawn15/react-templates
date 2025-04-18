import "./Die.css"

export default function Die({numSides = 6}){
    const roll = Math.floor(Math.random() * numSides) + 1 ;
    return (
        <div className="die">
        <h2>🎲</h2>
        <p></p>
        <p>{roll}</p>
        </div>
    );
}