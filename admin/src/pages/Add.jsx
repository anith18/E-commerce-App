import React from 'react'
import {assets} from '../assets/assets'
import { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({token}) => {
  const [image1, setImage1] = useState(false);
const [image2, setImage2] = useState(false);
const [image3, setImage3] = useState(false);
const [image4, setImage4] = useState(false);

const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");

const [category, setCategory] = useState("Men");
const [subCategory, setSubCategory] = useState("Topwear");

const [bestseller, setBestseller] = useState(false);
const [sizes, setSizes] = useState([]);

const onSubmitHandler = async (e) => {
  e.preventDefault();
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("subCategory", subCategory); // Fixed: lowercase 'subcategory'
    formData.append("bestseller", bestseller); // Added bestseller field
    formData.append("sizes", JSON.stringify(sizes)); // Fixed: lowercase 'sizes'

    if (image1) formData.append("image1", image1);
    if (image2) formData.append("image2", image2);
    if (image3) formData.append("image3", image3);
    if (image4) formData.append("image4", image4);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "token":token
      },
    };

    const response = await axios.post(`${backendUrl}/api/product/add`, formData, config);
    console.log("Product added successfully:", response.data);
    if(response.data.success){
      toast.success(response.data.message)
      setName('')
      setDescription('')
      setImage1(false)
      setImage2(false)
      setImage3(false)
      setImage4(false)
      setPrice('')
    }
    else{
      toast.error(error.message)
      
    }

  } catch (error) { 
    toast.error(error.message)
    console.error("Error:", error.response?.data || error.message);
  }
};



  return (
    <form onSubmit={onSubmitHandler} className="d-flex flex-column w-50 align-items-start">
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="d-flex g-0">
          <label htmlFor="image1" className="me-1">
            <img className="w-75" src={!image1?assets.upload_area:URL.createObjectURL(image1)} alt="" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>

          <label htmlFor="image2" className="me-1">
            <img className="w-75" src={!image2?assets.upload_area:URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0])}  type="file" id="image2" hidden />
          </label>

          <label htmlFor="image3" className="me-1">
            <img className="w-75" src={!image3?assets.upload_area:URL.createObjectURL(image3)} alt="" />
            <input onChange={(e)=>setImage3(e.target.files[0])}  type="file" id="image3" hidden />
          </label>

          <label htmlFor="image4">
            <img className="w-75" src={!image4?assets.upload_area:URL.createObjectURL(image4)} alt="" />
            <input onChange={(e)=>setImage4(e.target.files[0])}  type="file" id="image4" hidden />
          </label>
        </div>
      </div>
      <div className='w-100'>
      <p className='mb-2'>Product Name</p>
      <input onChange={(e)=>setName(e.target.value)} value={name} className="form-control w-100" style={{ maxWidth: "500px", padding: "10px 12px" }} type="text" placeholder="Enter name" required />
      </div>
      <div className='w-100'>
      <p className='mb-2'>Product Description</p>
      <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className="form-control w-100" style={{ maxWidth: "500px", padding: "10px 12px" }} type="text" placeholder="Enter content here" required />
      </div>
      <div>
        <div className='d-flex flex-column w-50 align-items-start'>
          <p>Product category</p>
          <select onChange={(e)=>setCategory(e.target.value)}>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p>Sub category</p>
          <select onChange={(e)=>setSubCategory(e.target.value)}>
            <option value="Topwear">Topwear</option>
            <option value="Botoomwear">Botoomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p>Product Price</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} type='Number' placeholder='25'/>
        </div>
      </div>
      <div>
  <p className="mb-2">Product Sizes</p>
  <div className="d-flex gap-2">
  <div 
    onClick={(e) => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, "S"])} 
    className={`bg-secondary text-white px-3 py-1 rounded ${sizes.includes("S") ? "border border-danger" : ""}`} 
    style={{ cursor: "pointer" }}
  >S</div>
  
  <div 
    onClick={(e) => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, "M"])} 
    className={`bg-secondary text-white px-3 py-1 rounded ${sizes.includes("M") ? "border border-danger" : ""}`} 
    style={{ cursor: "pointer" }}
  >M</div>
  
  <div 
    onClick={(e) => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, "L"])} 
    className={`bg-secondary text-white px-3 py-1 rounded ${sizes.includes("L") ? "border border-danger" : ""}`} 
    style={{ cursor: "pointer" }}
  >L</div>
  
  <div 
    onClick={(e) => setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev, "XL"])} 
    className={`bg-secondary text-white px-3 py-1 rounded ${sizes.includes("XL") ? "border border-danger" : ""}`} 
    style={{ cursor: "pointer" }}
  >XL</div>
  
  <div 
    onClick={(e) => setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev, "XXL"])} 
    className={`bg-secondary text-white px-3 py-1 rounded ${sizes.includes("XXL") ? "border border-danger" : ""}`} 
    style={{ cursor: "pointer" }}
  >XXL</div>
</div>
      </div>
      <div className="my-3 form-check">
        <input onChange={()=>setBestseller(prev=>!prev)} checked={bestseller} className="form-check-input" type="checkbox" id="bestsellerCheckbox" />
        <label className="form-check-label" htmlFor="bestsellerCheckbox">Add to Bestseller</label>
      </div>
      <button type="submit" className="btn text-white" style={{ backgroundColor: "black", borderRadius: "0" }}>
        Add
      </button>

    </form>
  );
};


export default Add