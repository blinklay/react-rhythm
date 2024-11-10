import { useParams } from "react-router-dom";
import styled from "./Product.module.css";
import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
export default function Product() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={styled.product}>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <h1 className={styled.header}>{product.name}</h1>

          <div className={styled.info}>
            <div className={styled.image}>
              <img src={product.img} alt="" />
            </div>

            <div className={styled.description}>{product.description}</div>
          </div>
        </>
      )}
    </div>
  );
}
