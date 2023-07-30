import Navbar from "./components/Navbar/Navbar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from './components/Hero/Hero'
import Browse from "./components/Browse/Browse";
import RoomBuilder from "./components/RoomBuilder/RoomBuilder";
import Footer from "./components/Footer/Footer";
import './App.css';
import CreditCardInfo from "./components/CreditCardInfo/CreditCardInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../src/pages/Home'
import Credit from '../src/pages/Credit'


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>


      <div className="content">
        <Routes>
          {" "}
          {/*This component makes sure that only one route appears at a time */}
          <Route exact path="/vrapp" element={<Home />}></Route>
          <Route exact path="/vrapp/credit" element={<Credit/>}></Route>
      
        </Routes>
      </div>
      
    </div>
    <Footer/>
  </Router>
  );
}

export default App;
