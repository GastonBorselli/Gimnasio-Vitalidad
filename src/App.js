import './App.css';
// import { Classes } from './components/Classes';
import {Home} from './components/Home'
// import { Plans } from './components/Plans';
// import { Routlines } from './components/Routlines';
// import {Contact} from './components/Contact'
import {Footer} from './components/Footer'
import { Navbar } from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
