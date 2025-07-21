import React from "react";

export default class WebGL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [1.0, 0.0, 0.0], // Default color (red)
      rotationSpeed: 0.01, // Default rotation speed
    };
    this.canvasRef = React.createRef();
    this.gl = null;
    this.rotation = 0;
    this.animationFrameId = null;
  }

  componentDidMount() {
    this.initWebGL();
    this.startAnimation();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animationFrameId);
    this.gl = null; // Cleanup WebGL context
  }

  initWebGL() {
    const canvas = this.canvasRef.current;
    this.gl = canvas.getContext("webgl");

    if (!this.gl) {
      console.error("WebGL not supported");
      return;
    }

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 aPosition;
      uniform float uRotation;
      void main() {
        float cosTheta = cos(uRotation);
        float sinTheta = sin(uRotation);
        gl_Position = vec4(
          aPosition.x * cosTheta - aPosition.y * sinTheta,
          aPosition.x * sinTheta + aPosition.y * cosTheta,
          0.0,
          1.0
        );
      }
    `;
    const vertexShader = this.createShader(this.gl.VERTEX_SHADER, vertexShaderSource);

    // Fragment shader
    const fragmentShaderSource = `
      precision mediump float;
      uniform vec3 uColor;
      void main() {
        gl_FragColor = vec4(uColor, 1.0);
      }
    `;
    const fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, fragmentShaderSource);

    // Program
    const program = this.createProgram(vertexShader, fragmentShader);
    this.gl.useProgram(program);

    // Triangle vertices
    const vertices = new Float32Array([
      0.0, 0.5, // Top vertex
      -0.5, -0.5, // Bottom-left vertex
      0.5, -0.5, // Bottom-right vertex
    ]);

    // Create buffer and bind data
    const positionBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, vertices, this.gl.STATIC_DRAW);

    // Link position attribute
    const positionLocation = this.gl.getAttribLocation(program, "aPosition");
    this.gl.enableVertexAttribArray(positionLocation);
    this.gl.vertexAttribPointer(positionLocation, 2, this.gl.FLOAT, false, 0, 0);

    // Get uniform locations
    this.uColorLocation = this.gl.getUniformLocation(program, "uColor");
    this.uRotationLocation = this.gl.getUniformLocation(program, "uRotation");
  }

  createShader(type, source) {
    const shader = this.gl.createShader(type);
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      console.error(this.gl.getShaderInfoLog(shader));
      this.gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  createProgram(vertexShader, fragmentShader) {
    const program = this.gl.createProgram();
    this.gl.attachShader(program, vertexShader);
    this.gl.attachShader(program, fragmentShader);
    this.gl.linkProgram(program);
    if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
      console.error(this.gl.getProgramInfoLog(program));
      this.gl.deleteProgram(program);
      return null;
    }
    return program;
  }

  startAnimation() {
    const render = () => {
      this.rotation += this.state.rotationSpeed;

      // Clear canvas
      this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);

      // Set uniforms
      this.gl.uniform3fv(this.uColorLocation, this.state.color);
      this.gl.uniform1f(this.uRotationLocation, this.rotation);

      // Draw triangle
      this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);

      this.animationFrameId = requestAnimationFrame(render);
    };
    render();
  }

  handleColorChange = (event) => {
    const hexColor = event.target.value;
    const rgb = [
      parseInt(hexColor.slice(1, 3), 16) / 255,
      parseInt(hexColor.slice(3, 5), 16) / 255,
      parseInt(hexColor.slice(5, 7), 16) / 255,
    ];
    this.setState({ color: rgb });
  };

  handleSpeedChange = (event) => {
    this.setState({ rotationSpeed: parseFloat(event.target.value) });
  };

  render() {
    return (
      <div>
        <canvas
          ref={this.canvasRef}
          width={400}
          height={400}
          style={{ border: "1px solid black" }}
        ></canvas>
        <div>
          <label>
            Color:
            <input type="color" onChange={this.handleColorChange} />
          </label>
          <label>
            Rotation Speed:
            <input
              type="range"
              min="0.01"
              max="0.1"
              step="0.01"
              value={this.state.rotationSpeed}
              onChange={this.handleSpeedChange}
            />
          </label>
        </div>
      </div>
    );
  }
}