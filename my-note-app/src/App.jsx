import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const onAddNote = () => {
    // uuid 랜덤 아이디 생성
    const newNote = {
      id: uuid(),
      title: "new note",
      contents: "this is new note content",
      modDate: Date.now(),
    };

    setNotes([...notes, newNote]); // 전 데이터와 배열 형식으로 추가
  };

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} notes={notes} />
      <Main />
    </div>
  );
}

export default App;
