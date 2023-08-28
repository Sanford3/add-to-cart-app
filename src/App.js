import { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Homepage/Home';
import Cart from './components/Cartpage/Cart';

function App() {

  const [theme, setTheme] = useState('light');

  const changeTheme = () =>{
    const newTheme = theme==='light'?'dark':'light';
    setTheme(newTheme);
  }

  return (
    <>
      <Router>
        <Header theme={theme} setTheme={setTheme} changeTheme={changeTheme}/>
        <Routes>
          <Route path="/" element={<Home theme={theme}  />} />
          <Route path="/cart" element={<Cart theme={theme} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
