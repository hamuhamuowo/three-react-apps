import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">홈</Link>
      <Link to="/createpost">투고</Link>
      <Link to="/login">로그인</Link>
    </nav>
  );
};

export default Navbar;
