import { NavLink } from "react-router-dom";
import styled from "./Navigate.module.css";
export default function Navigate() {
  return (
    <nav className={styled.navigate}>
      <ul className={styled.list}>
        <li className={styled.item}>
          <NavLink to={"/catalog"}>Store</NavLink>
        </li>
        <li className={styled.item}>
          <NavLink to={"/collections"}>Collections</NavLink>
        </li>
        <li className={styled.item}>
          <NavLink to={"/support"}>Support</NavLink>
        </li>
      </ul>
    </nav>
  );
}
