import React, { useEffect, useState } from "react";
import Product from "./Product";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div
      data-aos-delay="100"
      data-aos="fade-up"
      data-aos-duration="3000"
      className="container mx-auto "
    >
      <h1 className="text-3xl my-6 text-orange-700">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products?.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
