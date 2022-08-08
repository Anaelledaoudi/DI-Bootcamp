import logo from './logo.svg';
import './App.css';
import Car from './Components/Car';
import Garage from './Components/Garage';
import Phone from './Component3/Phone';

const carinfo = {name: "Ford", model: "Mustang"};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Garage size={"small"}/>
        <Phone/>
      </header>
    </div>
  );
}

export default App;
