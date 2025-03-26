import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-top pt-4">
      <div className="fs-3 fw-bold">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {products.slice(1, 4).map((item, index) => (
          <div key={index} className="py-3 border-top border-bottom text-secondary d-flex align-items-center gap-4">
            
            {/* Image */}
            <img className="img-fluid" style={{ width: "100px", height: "140px", objectFit: "cover" }} src={item.image[0]} alt="" />
            
            {/* Order Details */}
            <div className="d-flex flex-column flex-grow-1">
              <p className="fw-medium fs-6 m-0">{item.name}</p>

              <div className="mx-3 d-flex flex-wrap align-items-center gap-3 text-dark mt-2">
                <p className="fs-5 fw-bold">{currency}{item.price}</p>
                <p className="m-0">Quantity: 1</p>
                <p className="m-0">Size: M</p>
              </div>

              <p className="mx-3 m-0 mt-2">Date: <span className="text-secondary">25, July, 2024</span></p>

              <div className="d-flex justify-content-between align-items-center mt-2">
                <div className="d-flex align-items-center gap-2">
                  <span className="mx-20 badge bg-success">Ready To Ship</span>
                </div>
                <button className="btn btn-outline-dark">Track Order</button>
              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
