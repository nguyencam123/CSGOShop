import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Mymanage from "./components/pages/Manage";
import Detail from "./components/pages/Detail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartCheckout from "./components/pages/Cart";
import Login from "./components/pages/Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} initial />
        <Route path="/watches" element={<Mymanage />}></Route>
        <Route path="/about" element={<Home />}></Route>
        <Route path="/Detail/:getid" element={<Detail />}></Route>
        <Route path="/shopingcart" element={<CartCheckout />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
