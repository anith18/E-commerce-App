// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency } = useContext(ShopContext);
//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');
//   const [size,setSize]=useState('');


//   const fetchProductData = () => {
//     const product = products.find((item) => item._id === productId);
//     if (product) {
//       setProductData(product);
//       setImage(product.image[0]); // Set the first image as default
//     }
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId]);

//   return productData ? (
//     <div className="container border-top pt-4">
//       {/* Main Flexbox Container */}
//       <div className="d-flex flex-column flex-lg-row gap-4 align-items-start">
        
//         {/* ---------- Left: Product Images Section ----------- */}
//         <div className="d-flex flex-shrink-0" style={{ minWidth: '160px' }}>
//           {/* Thumbnails (More Space, No Scroll) */}
//           <div className="d-flex flex-lg-column gap-3">
//             {productData.image.map((item, index) => (
//               <img
//                 src={item}
//                 key={index}
//                 className="img-thumbnail"
//                 style={{ width: '100px', height: '100px', objectFit: 'cover', cursor: 'pointer' }}
//                 alt="Thumbnail"
//                 onClick={() => setImage(item)}
//               />
//             ))}
//           </div>

//           {/* Right Side: Large Selected Image */}
//           <div>
//             <img
//               src={image}
//               className="mx-2 img-fluid border rounded shadow"
//               style={{ maxWidth: '500px', height: 'auto' }}
//               alt="Selected"
//             />
//           </div>
//         </div>

//         {/* ---------- Right: Product Information ----------- */}
//         <div className="flex-grow-1">
//           {/* Product Name */}
//           <h1 className="fw-medium fs-3 mt-2">{productData.name}</h1>

//           {/* Star Ratings */}
//           <div className="d-flex align-items-center gap-1 mt-2">
//             <img src={assets.star_icon} alt="star" className="me-1" style={{ width: '14px' }} />
//             <img src={assets.star_icon} alt="star" className="me-1" style={{ width: '14px' }} />
//             <img src={assets.star_icon} alt="star" className="me-1" style={{ width: '14px' }} />
//             <img src={assets.star_icon} alt="star" className="me-1" style={{ width: '14px' }} />
//             <img src={assets.star_dull_icon} alt="star" className="me-1" style={{ width: '14px' }} />
//             <p className="ps-2 mb-0">(122)</p>
//           </div>

//           {/* Price */}
//           <p className="mt-3 fs-2 fw-medium">{currency}{productData.price}</p>

//           {/* Description */}
//           <p className="mt-3 text-secondary">{productData.description}</p>
//           <p>Select Size</p>
//           <div className='flex gap-2'>
//             {productData.sizes.map((item,index)=>(
//              <button
//              onClick={() => setSize(item)}
//              className={`mx-2 border py-2 px-4 bg-light ${item === size ? 'border border-warning' : ''}`}>
//              {item}
//            </button>
//             ))}
//           </div>

//           <button className="my-4 btn btn-dark px-4 py-2 text-sm active:bg-secondary">Add To Cart</button>
//           <hr className='mt-8 sm:w-4/5' />
//           <div className='text-sm text-grey-500 mt-2 flex flex-col gap-1'>
//               <p className='mt-1'>100% Original Product. Cash On Delivery On This Product. Easy return and exchange policy within 7 days.</p>
//           </div>

//         </div>

//       </div>
//       {/* -----------Description and Review section-----------  */}

//             <div className='mt-20'>
//               <div className='flex'>
//                 <b className='border px-5 py-3 text-sm'>Description</b>
//                 <p className='border px-5 py-3 text-sm'>Review(122)</p>
//               </div>
//             </div>

//     </div>
//   ) : (
//     <div className="opacity-0"></div>
//   );
// };

// export default Product;

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]); // Set the first image as default
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="container border-top pt-4">
      {/* Main Flexbox Container */}
      <div className="d-flex flex-column flex-lg-row gap-4 align-items-start">
        
        {/* ---------- Left: Product Images Section ----------- */}
        <div className="d-flex flex-shrink-0" style={{ minWidth: '160px' }}>
          {/* Thumbnails (More Space, No Scroll) */}
          <div className="d-flex flex-lg-column gap-3">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className="img-thumbnail"
                style={{ width: '100px', height: '100px', objectFit: 'cover', cursor: 'pointer' }}
                alt="Thumbnail"
                onClick={() => setImage(item)}
              />
            ))}
          </div>

          {/* Right Side: Large Selected Image */}
          <div>
            <img
              src={image}
              className="mx-2 img-fluid border rounded shadow"
              style={{ maxWidth: '500px', height: 'auto' }}
              alt="Selected"
            />
          </div>
        </div>

        {/* ---------- Right: Product Information ----------- */}
        <div className="flex-grow-1">
          {/* Product Name */}
          <h1 className="fw-medium fs-3 mt-2">{productData.name}</h1>

          {/* Star Ratings */}
          <div className="d-flex align-items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="star" className="me-1" style={{ width: '14px' }} />
            <img src={assets.star_icon} alt="star" className="me-1" style={{ width: '14px' }} />
            <img src={assets.star_icon} alt="star" className="me-1" style={{ width: '14px' }} />
            <img src={assets.star_icon} alt="star" className="me-1" style={{ width: '14px' }} />
            <img src={assets.star_dull_icon} alt="star" className="me-1" style={{ width: '14px' }} />
            <p className="ps-2 mb-0">(122)</p>
          </div>

          {/* Price */}
          <p className="mt-1 fs-2 fw-medium">{currency}{productData.price}</p>

          {/* Description */}
          <p className="mt-0 text-secondary">{productData.description}</p>

          {/* Select Size */}
          <p className="fw-bold mt-2">Select Size:</p>
          <div className="d-flex gap-2">
            {productData.sizes.map((item, index) => (
              <button
                key={index}
                onClick={() => setSize(item)}
                className={`btn btn-light border px-4 py-2 ${item === size ? 'border-warning' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Add to Cart Button */}
          <button className="my-2 btn btn-dark px-4 py-2">Add To Cart</button>

          {/* Product Info */}
          <hr className="mt-1 w-75" />
          <div className="text-muted small mt-2">
            <p>✅ 100% Original Product.</p>
            <p>💰 Cash On Delivery Available.</p>
            <p>🔄 Easy return & exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* -----------Description and Review section-----------  */}
      <div className="mt-5">
        <div className="d-flex">
          <button className="btn btn-outline-secondary px-4 py-2 text-sm fw-medium text-dark">Description</button>
          <button className="btn btn-outline-secondary px-4 py-2 text-sm">Review (122)</button>
        </div>
        <div className="d-flex flex-column gap-3 border p-4 text-muted small">
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
            
        </div>
      </div>

            {/* ---------Display Related Ones------------- */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />


    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
