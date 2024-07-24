import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import "./product.css";

function Product() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res) => {
      setProducts(res.data);
    }).catch ((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div className='product_wrapper'>
      {products.map((singleProduct)=>{
        return <ProductCard products={singleProduct} key={singleProduct.id}/>
      })}
    </div>
  )
}

export default Product
