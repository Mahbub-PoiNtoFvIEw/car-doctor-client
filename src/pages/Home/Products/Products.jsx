import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [productsData, setProductsData] = useState(6);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="w-1/2 mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#FF3811] mb-1">
          Popular Products
        </h2>
        <h3 className="text-4xl font-bold mb-3">Browse Our Products</h3>
        <p className="text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {products.slice(0, productsData).map((product, idx) => (
          <Product key={idx} product={product}></Product>
        ))}
      </div>
      <div className="flex justify-center items-center my-4">
        {productsData === 6 ? (
          <button
            onClick={() => setProductsData(products.length)}
            className="btn border-[.5px] border-[#FF3811] bg-white text-[#FF3811]"
          >
            Show more Products
          </button>
        ) : (
          <button
            onClick={() => setProductsData(6)}
            className="btn border-[.5px] border-[#FF3811] bg-white text-[#FF3811]"
          >
            Less Products
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
