import { Link } from "react-router-dom";
import styled from "./Collections.module.css";
export default function Collections() {
  return (
    <div className={styled.collections}>
      <h1 className={styled.header}>Collections</h1>

      <div className={styled.wrapper}>
        <Link to="/collections/new-on-board" className={styled.card}>
          <img src="./guitars/1.png" alt="decarative image guitar" />
          <p className={styled.text}>New On Board</p>
        </Link>

        <Link to="/collections/top-sellers" className={styled.card}>
          <img src="./guitars/2.png" alt="decarative image guitar" />
          <p className={styled.text}>Top Selling</p>
        </Link>
      </div>
    </div>
  );
}
