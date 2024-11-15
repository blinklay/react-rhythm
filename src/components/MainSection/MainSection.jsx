import Button from "../Button/Button";
import styled from "./MainSection.module.css";
export default function MainSection() {
  return (
    <>
      <h1 className={styled.header}>
        Browse top quality <span>Guitars</span> online
      </h1>

      <div className={styled.text}>
        Explore 50k+ latest collections of branded guitars online with Rhythm.
      </div>

      <div className={styled.download}>
        <Button to={"/app"}>Get the App</Button>

        <div className={styled.icons}>
          <img src="./icons/play-market-logo.svg" alt="Play Market Icon" />
          <img src="./icons/apple-logo.svg" alt="Apple Icon" />
        </div>
      </div>
    </>
  );
}
