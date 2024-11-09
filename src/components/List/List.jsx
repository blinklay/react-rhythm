import styled from "./List.module.css";
import ListItem from "../ListItem/ListItem";
export default function List({ products }) {
  return (
    <ul className={styled.list}>
      {products.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
