import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Quotes from './components/Quotes'
import Resturants from './components/Resturants'
import Food from './components/Food'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<Quotes/>}/>
          <Route path="/resturants" element={<Resturants/>}/>
          <Route path="/food" element={<Food/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
