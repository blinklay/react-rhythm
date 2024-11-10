import { useEffect } from "react";
import SmallCollectionList from "../SmallCollectionList/SmallCollectionList";
import styled from "./CheckSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setCatigoriesNewOnBoard,
  setCatigoriesTopSellers,
} from "../../actions/setCatigories";
export default function CheckSection() {
  const dispatch = useDispatch();

  const newOnBoard = useSelector((state) => state.catigories.newOnBoard);
  const topSelling = useSelector((state) => state.catigories.topSellers);

  const isLoading = {
    newOnBoard: newOnBoard.length === 0,
    topSelling: topSelling.length === 0,
  };

  useEffect(() => {
    dispatch(setCatigoriesNewOnBoard());
    dispatch(setCatigoriesTopSellers());
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
