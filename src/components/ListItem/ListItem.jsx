import { Link } from "react-router-dom";
import styled from "./ListItem.module.css";
export default function ListItem() {
  return (
    <li className={styled.item}>
      <Link>
        <div className={styled.image}>
          <img src="https://i.yapx.cc/YJXyE.jpg" alt="product image" />
        </div>

        <h3 className={styled["item-header"]}>The Essential Les Paul</h3>
        <p className={styled.price}>$1,299.00</p>
      </Link>
    </li>
  );
}
