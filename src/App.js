import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header";
import About from "./Pages/Home/About";
import Contact from "./Pages/Home/Contact";
import Booking from "./Pages/Home/Booking";
import Products from "./Pages/Home/Products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/product" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
