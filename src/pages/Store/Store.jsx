import { useEffect, useState } from "react";
import List from "../../components/List/List";
import styled from "./Store.module.css";
import { useDispatch, useSelector } from "react-redux";
import { productsSelect } from "../../selectors/productsSelect";
import { setProducts } from "../../actions/setProducts";
import Loader from "../../Loader/Loader";
import Filter from "../../components/Filter/Filter";
export default function Store() {
  const products = useSelector(productsSelect);
  const isLoading = products.length === 0;
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(setProducts());
  }, []);

  const onChange = (value) => {
    setFilter(value);
  };

  return (
    <div className={styled.store}>
      <div className={styled.wrapper}>
        <h1 className={styled.header}>Store</h1>
        <Filter onChange={onChange} />
      </div>

      {isLoading && <Loader />}
      {!isLoading && (
        <List
          products={products.filter((item) => item.category.includes(filter))}
        />
      )}
    </div>
  );
}
