import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="text-dark text-decoration-none">
      <div className="overflow-hidden">
        <img
          className="img-fluid product-image"
          src={image[0]}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 small">{name}</p>
      <p className="small fw-medium">
        {currency} {price}
      </p>
    </Link>
  );
};

export default ProductItem;
