import './App.css';
import { Button } from './components/button/Button';

function App() {

    const logSomeText = () => {
        console.log("You Clicked on Me!")
    }

  return (
    <div className="App">
      <header className="App-header">
      <Button onClick={logSomeText} type="button">
          Generate
      </Button>
      </header>
    </div>
  );
}

export default App;
