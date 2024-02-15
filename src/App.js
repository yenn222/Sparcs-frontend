import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import FreeBoard from "./components/FreeBoard/FreeBoard";
import QuestionBoard from "./components/Question/QuestionBoard";
import RecruitBoard from "./components/RecruitBoard/RecruitBoard";
import ParentSpace from "./components/ParentSpace/ParentSpace";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/freeBoard" element={<FreeBoard/>}/>
        <Route path="/questionBoard" element={<QuestionBoard/>}/>
        <Route path="/recruitBoard" element={<RecruitBoard/>}/>
        <Route path="/parentSpace" element={<ParentSpace/>}/>
    </Routes>
  );
}

export default App;
