import { signInWithPopup, signOut } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    // 구글 로그아웃
    signOut(auth).then(() => {
      // 로그인 정보 초기화
      localStorage.clear();
      // 로그인 유무 초기화
      setIsAuth(false);
      // 홈으로 이동
      navigate("/");
    });
  };

  return (
    <div>
      <p>로그아웃</p>
      <button onClick={logout}>Google 로그아웃</button>
    </div>
  );
};

export default Logout;
