import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>투고 제목</h1>
        </div>
        <div className="postTextContainer">
          투고 내용 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Eligendi dolorum tempore quam odit ratione, veniam repellendus
          molestias molestiae cumque illum quidem reprehenderit, sit iure?
          Libero est sequi amet! Aspernatur, soluta.
        </div>
        <div className="nameAndDeleteButton">
          <h3>@username</h3>
          <button>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
