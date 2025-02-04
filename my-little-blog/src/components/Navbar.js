import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faFileAlt,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} /> 홈
      </Link>
      <Link to="/createpost">
        <FontAwesomeIcon icon={faFileAlt} /> 투고
      </Link>
      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightToBracket} /> 로그인
        </Link>
      ) : (
        <Link to="/logout">
          <FontAwesomeIcon icon={faArrowRightToBracket} /> 로그아웃
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
