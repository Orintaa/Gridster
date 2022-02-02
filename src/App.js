import './App.css';
import { Button } from './components/button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button onClick={() => {console.log("You Clicked on Me!")}}
      type="button"
      buttonStyle="btn--primary--color"
      >Generate</Button>
      </header>
    </div>
  );
}

export default App;
