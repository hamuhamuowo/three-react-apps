import React from "react";
import "./Main.css";

const Main = ({ activeNote }) => {
  if (!activeNote) {
    return <div className="no-active-note">노트를 선택해주세요!</div>;
  }
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea id="" placeholder="노트 내용을 입력하세요"></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.contents}</div>
      </div>
    </div>
  );
};

export default Main;
