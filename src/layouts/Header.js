import React from "react";
import "./Header.css";
import {IoIosSearch} from "react-icons/io";

function Header() {
  return (
    <>
      <div className="header">
        <h3>서비스 이름</h3>
        
        <span className="input_border">
        <input type="text" placeholder="전체 검색"/>
        <IoIosSearch color={"gray"} size={"25"}/>
      </span>
      
      </div>
      <hr  className={'header_hr'}/>
    </>
  );
}

export default Header;
