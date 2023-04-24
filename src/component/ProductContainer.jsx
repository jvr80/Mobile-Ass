import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductContainer = () => {

  const [products, setProducts] = useState([])

  const fetchProducts = async () =>{

    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()
    setProducts(data)
  }
  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <>
      <div className="text-gray-600 body-font">
        <div className="flex justify-center text-3xl">Product</div>
        <div className="container px-5 py-24 mx-auto">
          <div className="product_content">

      {
        products.map(product => <ProductCard key={product.id} product={product} />)
      }
     





          </div>
        </div>
      </div>
    </>
  );
};

export default ProductContainer;
