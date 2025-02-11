import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea id="" placeholder="노트 내용을 입력하세요"></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">타이틀</h1>
        <div className="markdown-preview">노트 내용</div>
      </div>
    </div>
  );
};

export default Main;
