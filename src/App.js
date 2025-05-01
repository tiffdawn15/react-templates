import "./App.css";
import ShoppingListForm from "./react-forms/ShoppingListForm";
import SignupForm from "./react-forms/SignupForm";
import ShoppingList from "./react-forms/ShoppingList";

// Import the different componenets here to see the demos. 
function App() {
  return (
    <div className="App">
      <SignupForm />

      <ShoppingList/>
    </div>
  );
}

export default App;

