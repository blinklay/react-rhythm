import { useEffect, useState } from "react";
import List from "../../components/List/List";
import styled from "./Store.module.css";
import Loader from "../../Loader/Loader";
export default function Store() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={styled.store}>
      <h1 className={styled.header}>Store</h1>
      {isLoading && <Loader />}
      {!isLoading && <List products={products} />}
    </div>
  );
}
