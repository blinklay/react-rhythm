import { useEffect, useState } from "react";
import List from "../../components/List/List";
import styled from "./Store.module.css";
import { useDispatch, useSelector } from "react-redux";
import { productsSelect } from "../../selectors/productsSelect";
import { setProducts } from "../../actions/setProducts";
import Loader from "../../Loader/Loader";
export default function Store() {
  const products = useSelector(productsSelect);
  const isLoading = products.length === 0;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts());
  }, []);

  return (
    <div className={styled.store}>
      <h1 className={styled.header}>Store</h1>
      {isLoading && <Loader />}
      {!isLoading && <List products={products} />}
    </div>
  );
}
