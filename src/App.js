import './App.css';
import { Classes } from './components/Classes';
import {Principal} from './components/Home'
import { Plans } from './components/Plans';
import { Routlines } from './components/Routlines';
import {Contact} from './components/Contact'


function App() {
  return (
    <div className="App">
      <Principal/>
      <Routlines/>
      <Classes/>
      <Plans/>
      <Contact/>
    </div>
  );
}

export default App;
