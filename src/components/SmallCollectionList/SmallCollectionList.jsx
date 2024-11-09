import { Link } from "react-router-dom";
import styled from "./SmallCollectionList.module.css";
import List from "../List/List";
import Loader from "../../Loader/Loader";
export default function SmallCollectionList({ text, to, products, isLoading }) {
  return (
    <div className={styled.collection}>
      <div className={styled.wrapper}>
        <p className={styled.text}>{text}</p>
        <Link to={to} className={styled.link}>
          view all
        </Link>
      </div>

      {isLoading && <Loader />}
      {!isLoading && <List products={products} />}
    </div>
  );
}
