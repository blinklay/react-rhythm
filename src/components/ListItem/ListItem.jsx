import { Link } from "react-router-dom";
import styled from "./ListItem.module.css";
export default function ListItem({ id, price, name, img }) {
  return (
    <li className={styled.item}>
      <Link to={`/catalog/${id}`}>
        <div className={styled.image}>
          <img src={img} alt="product image" />
        </div>

        <h3 className={styled["item-header"]}>{name}</h3>
        <p className={styled.price}>${price}</p>
      </Link>
    </li>
  );
}
