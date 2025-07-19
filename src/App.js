import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RatingDemo from "./material-ui/RatingDemo";
import Form from "./material-ui/Form";
import NavBar from "./material-ui/NavBar";
import Example from "./web-gl/Box";
// Import the different componenets here to see the demos.
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/example" element={<Example />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
