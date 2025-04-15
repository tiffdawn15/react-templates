import "./App.css";
import LoginForm from "./LoginForm";
import DiceHand from "./DiceHand";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";

function App() {
  return (
    <div className="App">
      {/* <Greeter person="Tiff" from="Rita"/>
      <LoginForm />
      <DiceHand />
      <Chicken /> */}
      {/* <ListPicker values={[1, 2, 3]}/> */}
      <Heading color="pink" text="Welcome"/>
      <DoubleDice />
      <ColorList colors={["red", "green", "blue"]} />
    </div>
  );
}

export default App;
