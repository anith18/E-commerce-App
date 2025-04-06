import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal.jsx';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {

    if(products.length>0){
      let tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          }); 
        }
      }
    }
    setCartData(tempData);
    }
    
  }, [cartItems,products]);

  return (
    <div className="border-top pt-4">
      <div className="text-center mb-3">
        <Title text1="YOUR" text2="CART" />
      </div>
      <div className="container">
        {cartData.length > 0 ? (
          <>
            {/* Render Cart Items */}
            {cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);
              return (
                <div key={index} className="py-3 border-top border-bottom row align-items-center">
                  {/* Product Image & Details */}
                  <div className="col-md-4 d-flex align-items-center gap-3">
                    <img
                      className="img-fluid"
                      style={{ width: '80px' }}
                      src={productData.image[0]}
                      alt={productData.name}
                    />
                    <div>
                      <p className="mb-1 fw-medium">{productData.name}</p>
                      <p className="text-muted">Size: {item.size}</p>
                    </div>
                  </div>

                  {/* Product Price */}
                  <div className="col-md-3 text-center">
                    <p className="fw-bold">{currency} {productData.price}</p>
                  </div>

                  {/* Product Quantity */}
                  <div className="col-md-3 text-center">
                    <p className="fw-bold">Qty: {item.quantity}</p>
                  </div>

                  {/* Bin Icon for Deletion */}
                  <div className="col-md-2 text-center">
                    <img
                      className="img-fluid"
                      style={{ width: '20px', cursor: 'pointer' }}
                      src={assets.bin_icon}
                      alt="Delete Icon"
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                    />
                  </div>
                </div>
              );
            })}

            {/* Render CartTotal Component */}
            <div className="d-flex justify-content-end my-5">
              <div className="w-100 w-sm-50" style={{ maxWidth: "450px" }}>
                <CartTotal />
                <div class="w-100 d-flex justify-content-end">
                  <button onClick={()=>navigate('/place-order')} class="mt-3 btn btn-dark btn-sm py-3 px-4">
                    Proceed To Checkout
                  </button>
                    </div>

              </div>
              
            </div>
          </>
        ) : (
          <p className="text-center text-muted">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;