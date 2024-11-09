import { useEffect, useState } from "react";
import SmallCollectionList from "../SmallCollectionList/SmallCollectionList";
import styled from "./CheckSection.module.css";
export default function CheckSection() {
  const [newOnBoard, setNewOnBoard] = useState([]);
  const [topSelling, setTopSelling] = useState([]);
  const [isLoading, setIsLoading] = useState({
    newOnBoard: false,
    topSelling: false,
  });

  useEffect(() => {
    setIsLoading({
      topSelling: true,
      newOnBoard: true,
    });
    fetch("http://localhost:3000/newOnBoard")
      .then((res) => res.json())
      .then((data) => {
        setNewOnBoard(data);
      })
      .finally(() => {
        setIsLoading({
          ...isLoading,
          newOnBoard: false,
        });
      });

    fetch("http://localhost:3000/topSelling")
      .then((res) => res.json())
      .then((data) => {
        setTopSelling(data);
      })
      .finally(() => {
        setIsLoading({
          ...isLoading,
          topSelling: false,
        });
      });
  }, []);

  return (
    <section className={styled.check}>
      <h2 className={styled.header}>
        Check out the <span>Store</span>
      </h2>

      <div className={styled.wrapper}>
        <SmallCollectionList
          text="NEW ON THE BOARD"
          products={newOnBoard}
          isLoading={isLoading.newOnBoard}
        />
        <SmallCollectionList
          text="TOP SELLING"
          products={topSelling}
          isLoading={isLoading.topSelling}
        />
      </div>
    </section>
  );
}
