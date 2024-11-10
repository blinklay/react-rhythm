import Button from "../../components/Button/Button";
import CheckSection from "../../components/CheckSection/CheckSection";
import MainSection from "../../components/MainSection/MainSection";
import styled from "./Home.module.css";
export default function Home() {
  return (
    <div className={styled.home}>
      <img src="./back.png" alt="decarative image" className={styled.image} />
      <MainSection />

      <CheckSection />
    </div>
  );
}
