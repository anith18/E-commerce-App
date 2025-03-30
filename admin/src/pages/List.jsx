import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({token}) => {

  const [list,setList]=useState([])
  const fetchList=async()=>{
    try{
    const response=await axios.get(backendUrl+'/api/product/list')
    if(response.data.success){
      setList(response.data.products)
    }
    else{
      toast.error(response.data.message)
    }
  }catch(error){
    console.log(error)
    toast.error(error.message)
  }
  }

  const removeProduct = async (id) => {
    try {
        const response = await axios.post(backendUrl + '/api/product/remove', { id }, {headers:{token}});

        if (response.data.success) {
            toast.success(response.data.message);
            await fetchList();
        } else {
            toast.error(response.data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
};


  useEffect(()=>{
    fetchList();
  },[])

  return (
    <>
    <div className="container mt-3">
    <p className="mb-2">All Products List</p>
    
    {/* Table Headers */}
    <div className="row d-none d-md-flex fw-bold border-bottom py-2 mx-0">
        <div className="col-md-2">Image</div>
        <div className="col-md-3">Name</div>
        <div className="col-md-2">Category</div>
        <div className="col-md-2">Price</div>
        <div className="col-md-3 text-center">Action</div>
    </div>
    
    {/* Product List */}
    {list.map((item, index) => (
        <div key={index} className="row align-items-center border-bottom py-2 mx-0">
            <div className="col-md-2">
                <img src={item.image[0]} alt={item.name} className="img-fluid" style={{maxHeight: '50px'}}/>
            </div>
            <div className="col-md-3">
                <p className="mb-0">{item.name}</p>
            </div>
            <div className="col-md-2">
                <p className="mb-0">{item.category}</p>
            </div>
            <div className="col-md-2">
                <p className="mb-0">{currency}{item.price}</p>
            </div>
            <div onClick={()=>removeProduct(item._id)} className="col-md-3 text-center">
                <button className="btn btn-danger btn-sm">X</button>
            </div>
        </div>
    ))}
</div>
    </>
  )
}

export default List
