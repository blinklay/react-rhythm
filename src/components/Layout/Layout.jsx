import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import styled from "./Layout.module.css";
export default function Layout() {
  return (
    <div className={styled.container}>
      <Header />

      <main className={styled.main}>
        <Outlet />
      </main>
    </div>
  );
}
