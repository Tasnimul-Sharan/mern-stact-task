import React from "react";

const Product = ({ product }) => {
  const { category, name, seller, price, img } = product;
  return (
    <div class="card lg:max-w-lg bg-neutral text-white shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h3 class="card-title">{category}</h3>
        <h4>Name: {name}</h4>
        <p>Seller: {seller}</p>
        <p>price: ${price}</p>
        <div class="card-actions">
          <button className="btn btn-outline btn-info">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
