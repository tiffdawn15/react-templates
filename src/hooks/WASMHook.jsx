import { useState, useEffect } from "react";

function useWasm(wasmPath) {
  const [wasmModule, setWasmModule] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWasm() {
      try {
        const module = await WebAssembly.instantiateStreaming(fetch(wasmPath));
        setWasmModule(module.instance.exports);
      } catch (error) {
        console.error("Failed to load WASM:", error);
      } finally {
        setLoading(false);
      }
    }

    loadWasm();
  }, [wasmPath]);

  return { wasmModule, loading };
}
