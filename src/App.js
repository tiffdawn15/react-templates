import './App.css';
import LoginForm from './LoginForm';
import DiceHand from './DiceHand';

function Greeter(){
  return <h1>Hello, World!</h1>;
}


function App() {
  return (
    <div className="App">
     <Greeter /> 
     <LoginForm /> 
     <DiceHand />
    </div>
  );
}

export default App;
