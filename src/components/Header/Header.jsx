import { Link } from "react-router-dom";
import styled from "./Header.module.css";
import Navigate from "../Navigate/Navigate";
export default function Header() {
  return (
    <header className={styled.header}>
      <Link to={"/"} className={styled.logo}>
        <img src="./logo.svg" alt="logo" />
      </Link>

      <Navigate />
    </header>
  );
}
