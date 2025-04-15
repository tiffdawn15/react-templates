export default function ColorList({colors}){
    const elements = colors.map((color) => <li>{color}</li>);
    return (
        <div>
            <p>Color List</p>
            {/* // Two ways to render */}
            <p>{elements}</p>
            <ul> {colors.map((color) => (<li>{color}</li>))}</ul>
        </div>
    )
} 