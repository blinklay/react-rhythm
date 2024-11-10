import { useEffect } from "react";
import SmallCollectionList from "../SmallCollectionList/SmallCollectionList";
import styled from "./CheckSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setCatigoriesNewOnBoard,
  setCatigoriesTopSellers,
} from "../../actions/setCatigories";
import { topSellersSelect } from "../../selectors/topSellersSelect";
import { newOnBoardSelect } from "../../selectors/newOnBoardSelect";
export default function CheckSection() {
  const dispatch = useDispatch();

  const newOnBoard = useSelector(newOnBoardSelect);
  const topSelling = useSelector(topSellersSelect);

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
          to="/collections/new-on-board"
        />
        <SmallCollectionList
          text="TOP SELLING"
          products={topSelling}
          isLoading={isLoading.topSelling}
          to="/collections/top-sellers"
        />
      </div>
    </section>
  );
}
