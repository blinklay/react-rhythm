import { Link } from "react-router-dom";
import styled from "./Button.module.css";
export default function Button({ children, to }) {
  return (
    <Link to={to} className={styled.button}>
      {children}
    </Link>
  );
}
