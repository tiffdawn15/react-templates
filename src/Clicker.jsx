
function click() {
    console.log("Button clicked!");
}

function Clicker(){
  
    return (
        <div>
            <p>Click the button</p>
            <button onClick={click}>Click</button>
        </div>
    )
}

export default Clicker;