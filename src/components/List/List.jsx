import styled from "./List.module.css";
import ListItem from "../ListItem/ListItem";
export default function List() {
  return (
    <ul className={styled.list}>
      <ListItem />
      <ListItem />
      <ListItem />
    </ul>
  );
}
