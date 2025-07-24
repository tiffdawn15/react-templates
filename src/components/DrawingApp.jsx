import { useState, useRef } from "react";


function DrawingApp() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState("brush");
  const [color, setColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(50);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offSetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (tool === "eraser") {
      context.globalCompositeOperation = "destination-out";
      context.lineWidth = 20;
    } else {
      context.globalCompositeOperation = "source-over";
      context.strokeStyle = color;
      context.lineWidth = lineWidth;
    }

    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

    context.stroke();
  };

  const stopDrawing = (e) => {
    setIsDrawing(false);
  };
  return (
    <>
      <h1>Interactive Drawing App</h1>
      <div>
        <label>
          Tool:
          <select value={tool} onChange={(e) => setTool(e.target.vale)}>
            <option value="brush">Brush</option>
            <option value="eraser">Eraser</option>
          </select>
        </label>
        <label>
          Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            disabled={tool === "eraser"}
          />
        </label>
        <label>
          Line Width
          <input
            type="number"
            value={lineWidth}
            onChange={(e) => setLineWidth(Number(e.target.value))}
            disabled={tool === "eraser"}
          ></input>
        </label>
      </div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ border: "1px solid black" }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      ></canvas>
    </>
  );
}

export default DrawingApp;
