import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod"); // Default to 'cod'
  const {navigate}=useContext(ShopContext);

  return (
    <div className="container py-5 min-vh-80 border-top">
      <div className="row justify-content-between gy-4">
        {/* Left Side - Address Form */}
        <div className="col-12 col-md-6">
          <div className="my-3">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>
          <div className="d-flex gap-3">
            <input
              type="text"
              className="form-control border border-secondary rounded py-2 px-3"
              placeholder="First Name"
            />
            <input
              type="text"
              className="form-control border border-secondary rounded py-2 px-3"
              placeholder="Last Name"
            />
          </div>
          <input
            type="email"
            className="my-2 form-control border border-secondary rounded py-2 px-3"
            placeholder="Email Address"
          />
          <input
            type="text"
            className="my-2 form-control border border-secondary rounded py-2 px-3"
            placeholder="Street"
          />
          <div className="d-flex gap-3">
            <input
              type="text"
              className="form-control border border-secondary rounded py-2 px-3"
              placeholder="City"
            />
            <input
              type="text"
              className="form-control border border-secondary rounded py-2 px-3"
              placeholder="State"
            />
          </div>
          <div className="d-flex gap-3">
            <input
              type="number"
              className="my-2 form-control border border-secondary rounded py-2 px-3"
              placeholder="ZipCode"
            />
            <input
              type="text"
              className="my-2 form-control border border-secondary rounded py-2 px-3"
              placeholder="Country"
            />
          </div>
          <input
            type="number"
            className="my-2 form-control border border-secondary rounded py-2 px-3"
            placeholder="Phone no:"
          />
        </div>

        {/* Right Side - CartTotal and Payment Method */}
        <div className="col-12 col-md-5">
          <div className="mt-5">
            <CartTotal />
          </div>
          <div className="mt-5">
            <Title text1={"PAYMENT"} text2={"METHOD"} />
            {/* Payment method selection */}
            <div className="d-flex flex-column flex-lg-row gap-3">
              {/* Stripe Payment Option */}
              <div
                onClick={() => setMethod("stripe")}
                className={`d-flex align-items-center gap-3 border p-1 px-3 cursor-pointer ${
                  method === "stripe" ? "border-primary bg-light" : ""
                }`}
                style={{ height: "40px" }} // Reduced height
              >
                <p
                  className={`min-width-20 h-20 border rounded-circle ${
                    method === "stripe" ? "bg-primary" : "bg-light"
                  }`}
                ></p>
                <img
                  className="h-5 mx-4"
                  src={assets.stripe_logo}
                  alt="Stripe Logo"
                />
              </div>

              {/* Razorpay Payment Option */}
              <div
                onClick={() => setMethod("razorpay")}
                className={`d-flex align-items-center gap-3 border p-1 px-3 cursor-pointer ${
                  method === "razorpay" ? "border-primary bg-light" : ""
                }`}
                style={{ height: "40px" }} // Reduced height
              >
                <p
                  className={`min-width-20 h-20 border rounded-circle ${
                    method === "razorpay" ? "bg-primary" : "bg-light"
                  }`}
                ></p>
                <img
                  className="h-5 mx-4"
                  src={assets.razorpay_logo}
                  alt="Razorpay Logo"
                />
              </div>

              {/* Cash on Delivery Option */}
              <div
                onClick={() => setMethod("cod")}
                className={`justify-content-center  d-flex align-items-center gap-3 border p-1 px-3 cursor-pointer ${
                  method === "cod" ? "justify-content-center  border-primary bg-light" : ""
                }`}
                style={{ height: "40px" }} // Reduced height
              >
                <p
                  className={`min-width-20 h-20 border rounded-circle ${
                    method === "cod" ? "bg-primary" : "bg-light"
                  }`}
                ></p>
                <p className="justify-content-center text-muted text-sm font-weight-medium mx-4">
                  COD
                </p>
              </div>
            </div>
                      <div className="w-100 text-end mt-4">
            <button onClick={()=>navigate('/orders')} className="btn btn-dark px-4 py-2">Place Order</button>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;