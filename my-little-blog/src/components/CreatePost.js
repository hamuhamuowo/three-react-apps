import React from "react";
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>글을 투고하자</h1>
        <div className="inputPost">
          <div>타이틀</div>
          <input type="text" placeholder="타이틀을 기입" />
        </div>
        <div className="inputPost">
          <div>투고</div>
          <textarea placeholder="투고 내용을 작성"></textarea>
        </div>
        <button className="postButton">투고</button>
      </div>
    </div>
  );
};

export default CreatePost;
