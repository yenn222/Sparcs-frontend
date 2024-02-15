import React from "react";
import FreeBoard from "../components/FreeBoard/FreeBoard";
import QuestionBoard from "../components/Question/QuestionBoard";
import RecruitBoard from "../components/RecruitBoard/RecruitBoard";
import ParentSpace from "../components/ParentSpace/ParentSpace";
import "./Home.css";


function Home() {
  
  return (
    <div className="boards">
      <section className='free_question'>
        <FreeBoard/>
        <QuestionBoard/>
      </section>
      
      <section className='recruit_parent'>
        
        <RecruitBoard/>
        <ParentSpace/>
      </section>
    </div>
  );
}

export default Home;
