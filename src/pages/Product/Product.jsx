import { useParams } from "react-router-dom";
import styled from "./Product.module.css";
import { useEffect, useState } from "react";
export default function Product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <div className={styled.product}>
      <h1 className={styled.header}>{product.name}</h1>

      <div className={styled.info}>
        <div className={styled.image}>
          <img src={product.img} alt="" />
        </div>

        <div className={styled.description}>{product.description}</div>
      </div>
    </div>
  );
}
