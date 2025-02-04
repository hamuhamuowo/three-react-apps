import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    // 구글 로그인
    signInWithPopup(auth, provider).then((result) => {
      // 로그인 정보를 저장
      localStorage.setItem("isAuth", true);
      // 로그인 유무 상태 저장
      setIsAuth(true);
      // 홈으로 이동
      navigate("/");
    });
  };

  return (
    <div>
      <p>로그인</p>
      <button onClick={loginInWithGoogle}>Google 로그인</button>
    </div>
  );
};

export default Login;
