import React from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Orders = ({token}) => {
  const [orders,setOrders]=useState([])
      const fetchAllOrders = async()=>{
        if(!token){
          return null;
        }
        try {
          const response=await axios.post(`${backendUrl}/api/order/list`,{},{headers:{token}});
          if(response.data.success){
            setOrders(response.data.orders)
          }
          else{
            toast.error(error.message)
          }
          
        } catch (error) {
          toast.error(error.message)
        }

      }

      const statusHandler=async(event , orderId)=>{
          try {
            const response=await axios.post(`${backendUrl}/api/order/status`,{orderId,status:event.target.value},{headers:{token}})
            if(response.data.success){
              await fetchAllOrders()
            }
          } catch (error) {
            console.log(error.message)
            toast.error(error.message)
            
          }
      }

      useEffect(()=>{
        fetchAllOrders()
      },[token])
//   return (
//     <div>
//   <h3>Order Page</h3>

//   <div>
//     {orders.map((order, index) => (
//       <div key={index} style={{ border: "1px solid #ccc", margin: "20px", padding: "10px" }}>
//         <img src={assets.parcel_icon} alt="Parcel Icon" style={{ width: "40px" }} />

//         <div>
//           <div>
//           {order.items.map((item, idx) => (
//             <p key={idx}>
//               {item.name} x {item.quantity}
//               <span> - {item.size}</span>
//               {idx === order.items.length - 1 && <hr />}
//             </p>
//           ))}
//         </div>
//             {/* first section  */}
//         <p><strong>{order.address.firstName} {order.address.lastName}</strong></p>
//         <div>
//           <p>{order.address.street},</p>
//           <p>{order.address.city}, {order.address.state} - {order.address.zipcode}</p>
//           <p>State: {order.address.state}</p>
//         </div>
//         <p>{order.address.phone}</p>
//       </div>
//       {/* 2nd section */}
//       <div>
//   <p>Items: {order.items.length}</p>
//   <p>Method: {order.paymentMethod}</p>
//   <p>Payment: {order.payment ? 'Done' : 'Pending'}</p>
//   <p>Date: {new Date(order.date).toLocaleDateString()}</p>

//       </div>

//       {/* other section  */}
//       <p>{currency}{order.amount}</p>

//       {/* another section  */}
//       <select value={order.status}>
//         <option value="Order Placed">Order Placed</option>
//         <option value="Packing">Packing</option>
//         <option value="Shipped">Shipped</option>
//         <option value="Out for delivery">Out for delivery</option>
//         <option value="Delivered">Delivered</option>
//       </select>
//       </div>
//     ))
//     }
//   </div>

// </div>

//   )

return (
  <div className="container my-4">
    <h3 className="text-center mb-4">Order Page</h3>

    {orders.map((order, index) => (
      <div key={index} className="border rounded shadow-sm p-3 mb-4 bg-light">
        <div className="row align-items-start">

          {/* 🔹 Section 1: Items */}
          <div className="col-md-3">
          <img src={assets.parcel_icon} alt="Parcel Icon" style={{ width: "40px" }} />
            <h6>Items:</h6>
            {order.items.map((item, idx) => (
              <p key={idx} className="mb-1">
                {item.name} x {item.quantity}
                <span className="text-muted"> - {item.size}</span>
                {idx === order.items.length - 1 && <hr />}
              </p>
            ))}
          </div>

          {/* 🔹 Section 2: Address */}
          <div className="col-md-3">
            <h6>Shipping Address:</h6>
            <p className="mb-1"><strong>{order.address.firstName} {order.address.lastName}</strong></p>
            <p className="mb-1">{order.address.street}</p>
            <p className="mb-1">{order.address.city}, {order.address.state} - {order.address.zipcode}</p>
            <p className="mb-1">Phone: {order.address.phone}</p>
          </div>

          {/* 🔹 Section 3: Order Summary */}
          <div className="col-md-3">
            <h6>Summary:</h6>
            <p className="mb-1">Items: {order.items.length}</p>
            <p className="mb-1">Method: {order.paymentMethod}</p>
            <p className="mb-1">Payment: {order.payment ? '✅ Done' : '❌ Pending'}</p>
            <p className="mb-1">Date: {new Date(order.date).toLocaleDateString()}</p>
          </div>

          {/* 🔹 Section 4: Amount & Status */}
          <div className="col-md-3">
            <h6>Actions:</h6>
            <p className="mb-2"><strong>Total: {currency}{order.amount}</strong></p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="form-select">
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>

        </div>
      </div>
    ))}
  </div>
);

}

export default Orders
