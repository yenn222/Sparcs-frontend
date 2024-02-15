import React from 'react';
import Home from './pages/Home';
import Board from './pages/Question';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/freeboard" element={<Board/>}/>
        <Route path="/questionboard" element={<Board/>}/>
        <Route path="/recruitfreeboard" element={<Board/>}/>
        <Route path="/parentspace" element={<Board/>}/>
    </Routes>
  );
}

export default App;
