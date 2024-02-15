import React from 'react';
import "./FreeBoard.css"
import BoardItem from "../BoadrItem/BoardItem";

export default function FreeBoard() {
  const posts = [
    { id: 1, title: '게시글 제목1', author: '작성자1', createdAt: '2024-02-15' },
    { id: 2, title: '게시글 제목2', author: '작성자2', createdAt: '2024-02-16' },
    { id: 3, title: '게시글 제목3', author: '작성자3', createdAt: '2024-02-17' }
  ];
    return (
        <div className='freeBoard_header'>
            <hr/>
                <h3>자유게시판</h3>
            <hr/>
          
          <div className="board">
            {posts.map(post => (
              <BoardItem
                key={post.id}
                title={post.title}
                author={post.author}
                createdAt={post.createdAt}
              />
            ))}
          </div>
        </div>
    )
}
