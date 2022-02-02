import {useRef} from "react";
import './App.css';
import { Button } from './components/button/Button';

function App() {
    const {columns, setColumns} = useRef('10')
    const logSomeText = () => {
        console.log("You Clicked on Me!")
    }

  return (
    <div className="App">
      <header className="App-header">
      <Button onClick={logSomeText} type="button">
          Generate
      </Button>
          <span>columns: {columns}</span>
          <span>{columns}</span>
      </header>
    </div>
  );
}

export default App;
