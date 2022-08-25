import "./App.css";
import Hello from "./components/hello";
import Button from "./components/button";
import { useEffect, useState } from "react";
import Pokemon, { usePokemon } from "./components/pokemon";

function App() {
  const [totalNumberOfClick, setTotalNumberOfClick] = useState(0);
  const { pokemon, addPokemon } = usePokemon();

  useEffect(() => {
    if (totalNumberOfClick > 0) addPokemon();
  }, [totalNumberOfClick]);
  const incrementTotal = () => {
    setTotalNumberOfClick(totalNumberOfClick + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <Button title="you have clicked" func={incrementTotal} />
        <Button title="you clicked" func={incrementTotal} />
        <Button title="clicked" func={incrementTotal} />
        <p>total number: {totalNumberOfClick}</p>
        <Pokemon pokemon={pokemon} />
      </header>
    </div>
  );
}

export default App;
