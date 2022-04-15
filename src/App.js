import './App.css';
import Header from "../src/components/Header/Header"
import Tiles from "../src/components/Tiles/Tiles"
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="app">
      <Header/>
      <Tiles/>
      <Toaster/>
    </div>
  );
}

export default App;
