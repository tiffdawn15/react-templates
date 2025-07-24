import { useRef, useEffect, useCallback, useState } from 'react';

const useWebGL = (options = {}) => {
  const canvasRef = useRef(null);
  const glRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState(null);

  const {
    contextAttributes = {
      alpha: true,
      antialias: true,
      depth: true,
      stencil: false,
      preserveDrawingBuffer: false,
      powerPreference: 'default'
    },
    onContextLost,
    onContextRestored,
    enableExtensions = []
  } = options;

  // Initialize WebGL context
  const initializeContext = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    try {
      // Try WebGL2 first, fallback to WebGL1
      const gl = canvas.getContext('webgl2', contextAttributes) || 
                 canvas.getContext('webgl', contextAttributes) || 
                 canvas.getContext('experimental-webgl', contextAttributes);

      if (!gl) {
        throw new Error('WebGL not supported');
      }

      // Enable requested extensions
      const extensions = {};
      enableExtensions.forEach(extName => {
        const ext = gl.getExtension(extName);
        if (ext) {
          extensions[extName] = ext;
        } else {
          console.warn(`Extension ${extName} not available`);
        }
      });

      gl.extensions = extensions;
      glRef.current = gl;
      setIsInitialized(true);
      setError(null);

      return gl;
    } catch (err) {
      setError(err.message);
      setIsInitialized(false);
      return null;
    }
  }, [contextAttributes, enableExtensions]);

  // Handle context lost
  const handleContextLost = useCallback((event) => {
    event.preventDefault();
    setIsInitialized(false);
    
    // Cancel any ongoing animation frames
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    onContextLost?.(event);
  }, [onContextLost]);

  // Handle context restored
  const handleContextRestored = useCallback((event) => {
    const gl = initializeContext();
    if (gl) {
      onContextRestored?.(gl, event);
    }
  }, [initializeContext, onContextRestored]);

  // Resize canvas and viewport
  const resize = useCallback((width, height) => {
    const canvas = canvasRef.current;
    const gl = glRef.current;
    
    if (!canvas || !gl) return;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;
    
    // Update viewport
    gl.viewport(0, 0, width, height);
  }, []);

  // Animation loop management
  const startAnimationLoop = useCallback((renderCallback) => {
    const animate = (timestamp) => {
      if (glRef.current && isInitialized) {
        renderCallback(timestamp, glRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isInitialized]);

  // Clear resources
  const clear = useCallback((clearColor = [0, 0, 0, 1]) => {
    const gl = glRef.current;
    if (!gl) return;

    gl.clearColor(...clearColor);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }, []);

  // Cleanup function
  const cleanup = useCallback(() => {
    // Cancel animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    // Cleanup WebGL resources would go here
    // (buffers, textures, programs, etc.)
    const gl = glRef.current;
    if (gl) {
      // Example cleanup - you'd add more based on your needs
      const numTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
      for (let i = 0; i < numTextureUnits; i++) {
        gl.activeTexture(gl.TEXTURE0 + i);
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
      }
      
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      gl.bindRenderbuffer(gl.RENDERBUFFER, null);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.useProgram(null);
    }

    glRef.current = null;
    setIsInitialized(false);
  }, []);

  // Setup effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize context
    initializeContext();

    // Add event listeners for context loss/restore
    canvas.addEventListener('webglcontextlost', handleContextLost);
    canvas.addEventListener('webglcontextrestored', handleContextRestored);

    // Cleanup on unmount
    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
      cleanup();
    };
  }, [initializeContext, handleContextLost, handleContextRestored, cleanup]);

  // Utility functions for common WebGL operations
  const utils = {
    createShader: useCallback((type, source) => {
      const gl = glRef.current;
      if (!gl) return null;

      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const error = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new Error(`Shader compilation error: ${error}`);
      }

      return shader;
    }, []),

    createProgram: useCallback((vertexShader, fragmentShader) => {
      const gl = glRef.current;
      if (!gl) return null;

      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        const error = gl.getProgramInfoLog(program);
        gl.deleteProgram(program);
        throw new Error(`Program linking error: ${error}`);
      }

      return program;
    }, []),

    createBuffer: useCallback((data, target = null) => {
      const gl = glRef.current;
      if (!gl) return null;

      const buffer = gl.createBuffer();
      const bufferTarget = target || gl.ARRAY_BUFFER;
      
      gl.bindBuffer(bufferTarget, buffer);
      gl.bufferData(bufferTarget, data, gl.STATIC_DRAW);
      
      return buffer;
    }, [])
  };

  return {
    canvasRef,
    gl: glRef.current,
    isInitialized,
    error,
    resize,
    clear,
    startAnimationLoop,
    cleanup,
    utils
  };
};