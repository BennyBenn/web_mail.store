import './App.css';
import './Componetes/login.js';
import { Productos } from './Componetes/Productos';


function App() {
  return (
    <div className="App">
      <Productos/>
      <login/>
    </div>
    
  );
}

export default App;
