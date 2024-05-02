import "./App.css";
import ArenaWithBull from "./components/ArenaWithBull";
import OldMatador from "./components/OldMatador";
import Matador from "./components/Matador";

function App() {
  return (
    <div className="App">
      <ArenaWithBull matador={<Matador />} />
    </div>
  );
}

export default App;
