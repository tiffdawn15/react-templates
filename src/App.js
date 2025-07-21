import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./material-ui/NavBar";
import { WebGLExample } from "./web-gl/Box";
import Prompt1 from "./prompt1/index";
import NoLooking from "./prompt1/NoLooking";
import Memoization from "./prompt1/Memoization";
// Import the different componenets here to see the demos.
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/example" element={<WebGLExample />} />
          <Route path="/prompt1" element={<Prompt1 />} />
          <Route path="/no-looking" element={<NoLooking />} />
          <Route path="/memoization" element={<Memoization />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
