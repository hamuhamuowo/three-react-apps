import React, { useState } from "react";
import "./CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();

  const navigate = useNavigate(); // 페이지 이동

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title,
      postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });

    navigate("/");
  };

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>글을 투고하자</h1>
        <div className="inputPost">
          <div>타이틀</div>
          <input
            type="text"
            placeholder="타이틀을 기입"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>투고</div>
          <textarea
            placeholder="투고 내용을 작성"
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={createPost}>
          투고
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
