import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token , currency } = useContext(ShopContext);
  const [orderData,setOrderData]=useState([])

  const loadOrderData=async()=>{
    try{
    if(!token){
      return null
    }
    const response=await axios.post(`${backendUrl}/api/order/userOrders`,{},{headers:{token}})
    if(response.data.success){
      let allOrdersItem=[]
      response.data.orders.map((order)=>{  
        order.items.map((item)=>{
          item['status']=order.status
          item['payment']=order.payment
          item['paymentMethod']=order.paymentMethod
          item['date']=order.date
          allOrdersItem.push(item)
        })
      })
      setOrderData(allOrdersItem.reverse());
    }
  }
  catch(error){
    console.log(error.message)
  }
}


  useEffect(()=>{
    loadOrderData()
  },[token])

  

  return (
    <div className="border-top pt-4">
      <div className="fs-3 fw-bold">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {orderData.map((item, index) => (
          <div key={index} className="py-3 border-top border-bottom text-secondary d-flex align-items-center gap-4">
            
            {/* Image */}
            <img className="img-fluid" style={{ width: "100px", height: "140px", objectFit: "cover" }} src={item.image[0]} alt="" />
            
            {/* Order Details */}
            <div className="d-flex flex-column flex-grow-1">
              <p className="fw-medium fw-bold fs-6 m-0">{item.name}</p>

              <div className="mx-3 d-flex flex-wrap align-items-center gap-3 text-dark mt-2">
                <p className="m-0 fw-bold">{currency}{item.price}</p>
                <p className="m-0">Quantity: {item.quantity}</p>
                <p className="m-0">Size: {item.size}</p>
              </div>

              <p className="mx-3 m-0 mt-2">Date: <span className="text-secondary">{new Date(item.date).toDateString()}</span></p>
              <p className="mx-3 m-0 mt-2">Payment: <span className="text-secondary">{item.paymentMethod}</span></p>

              <div className="d-flex justify-content-between align-items-center mt-2">
                <div className="d-flex align-items-center gap-2">
                  <span className="mx-20 badge bg-success">{item.status}</span>
                </div>
                <button onClick={()=>loadOrderData()} className="btn btn-outline-dark">Track Order</button>
              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
