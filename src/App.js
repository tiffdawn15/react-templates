import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./material-ui/NavBar";
import { WebGLExample } from "./web-gl/Box";
import Prompt1 from "./prompt1/index";
import NoLooking from "./prompt1/NoLooking";
import Prompt2 from "./prompt2/index";
import Memoization from "./prompt1/Memoization";
import DrawingApp from "./components/DrawingApp";
// Import the different componenets here to see the demos.
function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/drawing" element={<DrawingApp />} />
          <Route path="/example" element={<WebGLExample />} />
          <Route path="/prompt1" element={<Prompt1 />} />
          <Route path="/no-looking" element={<NoLooking />} />
          <Route path="/memoization" element={<Memoization />} />
          <Route path="/prompt2" element={<Prompt2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
