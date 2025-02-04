import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faFileAlt,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} /> 홈
      </Link>
      <Link to="/createpost">
        <FontAwesomeIcon icon={faFileAlt} /> 투고
      </Link>
      <Link to="/login">
        <FontAwesomeIcon icon={faArrowRightToBracket} /> 로그인
      </Link>
    </nav>
  );
};

export default Navbar;
