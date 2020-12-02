import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Components
import Navbar from './components/layout/layout/navbar';
import './assets/img/partnerprogram.jpg'


function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
