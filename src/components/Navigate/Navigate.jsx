import { Link } from "react-router-dom";
import styled from "./Navigate.module.css";
export default function Navigate() {
  return (
    <nav className={styled.navigate}>
      <ul className={styled.list}>
        <li className={styled.item}>
          <Link to={"/store"}>Store</Link>
        </li>
        <li className={styled.item}>
          <Link to={"/store"}>Collections</Link>
        </li>
        <li className={styled.item}>
          <Link to={"/store"}>Support</Link>
        </li>
      </ul>
    </nav>
  );
}
