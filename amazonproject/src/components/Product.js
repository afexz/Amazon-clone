import React, { useEffect, useState } from "react";
import axios from "axios";
// import Product from './Product';
import ProductCard from "./ProductCard";

function Product() {
  const [first, setFirst] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setFirst(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {first.map((singleProd) => (
        <ProductCard products={singleProd} key={singleProd.id} />
      ))}
    </div>
  );
}

export default Product;
