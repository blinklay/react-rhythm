import { Link } from "react-router-dom";
import styled from "./SmallCollectionList.module.css";
import List from "../List/List";
export default function SmallCollectionList({ text, to }) {
  return (
    <div className={styled.collection}>
      <div className={styled.wrapper}>
        <p className={styled.text}>{text}</p>
        <Link to={to} className={styled.link}>
          view all
        </Link>
      </div>

      <List />
    </div>
  );
}
