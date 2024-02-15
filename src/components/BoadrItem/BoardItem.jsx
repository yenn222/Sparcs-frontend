import React from "react";
import "./BoardItem.css"

export default function BoardItem({title, author, createdAt}) {
  return (
    <div className='board-item'>
      <h2>{title}</h2>
      <p>- 게시자</p>
      <p className='created-at'>[{createdAt}]</p>
    </div>
  );
}
