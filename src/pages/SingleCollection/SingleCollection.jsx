import { useParams } from "react-router-dom";
import styled from "./SingleCollection.module.css";
import { useDispatch, useSelector } from "react-redux";
import List from "../../components/List/List";
import { useEffect } from "react";
import {
  setCatigoriesNewOnBoard,
  setCatigoriesTopSellers,
} from "../../actions/setCatigories";
import Loader from "../../Loader/Loader";

function kebabToCamelCase(str) {
  return str.replace(/-([a-z])/g, (match) => match[1].toUpperCase());
}

const categories = {
  "new-on-board": setCatigoriesNewOnBoard,
  "top-sellers": setCatigoriesTopSellers,
};

export default function SingleCollection() {
  const { collection } = useParams();
  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.catigories[kebabToCamelCase(collection)]
  );

  const isLoading = products.length === 0;

  useEffect(() => {
    dispatch(categories[collection]());
  }, []);

  return (
    <div className={styled.collection}>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <h1 className={styled.header}>{collection.replaceAll("-", " ")}</h1>
          <List products={products} />
        </>
      )}
    </div>
  );
}
