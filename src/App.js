import "./App.css";
// import Counter from "./Counter";
// import Form from './Form';
import Dumb from "./state-demo/Dumb";
import ScoreKeeper from "./state-demo/ScoreKeeper";
import Emojilicker from "./state-demo/Emojilicker";
// import Toggler from './Toggler';
// const data = [
//   {item: 'eggs', quantity: 12, completed: false},
//   {item: 'milk', quantity: 1, completed: true},
//   {item: 'cheese', quantity: 2, completed: false}, 
//   {item: 'chicken', quantity: 4, completed: false}, 
//   {item: 'carrots', quantity: 2, completed: true}

// ]

function App() {
  return (
    <div className="App">
     <h1> State Demo</h1>
     <Dumb />
     <ScoreKeeper />
     <Emojilicker />
    </div>
  );
}

export default App;

// NOTE: Example of how to use components with props 
// <div className="App">
// {/* <Greeter person="Tiff" from="Rita"/> */}
// {/* <LoginForm />
// <DiceHand />
// <Chicken />  */}
// {/* <ListPicker values={[1, 2, 3]}/> */ }
// {/* <Heading color="pink" text="Welcome"/>
// <DoubleDice />
// <ColorList colors={["red", "green", "blue"]} /> */}
// {/* <ShoppingList items={data} /> */}
// <Counter />
// <Toggler />
//  {/* <Form /> */}
//  {/* <Clicker /> */}
// </div>
