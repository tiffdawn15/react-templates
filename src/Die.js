import "./Die.css"

export default function Die(){
    const roll = Math.floor(Math.random() * 6) ;
    return (
        <div className="die">
        <h2>🎲</h2>
        <p>{roll}</p>
        </div>
    );
}