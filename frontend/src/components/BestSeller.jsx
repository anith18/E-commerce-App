// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';
// import { Container, Row, Col } from "react-bootstrap";
// import Title from "./Title"; 

// const BestSeller = () => {
//     const {products}=useContext(ShopContext);
//     const [bestSeller,setBestSeller]=useState([]);

//     useEffect(()=>{
//         const  bestproducts=products.filter((item)=>(item.bestSeller));
//         setBestSeller(bestproducts.slice(0,6));
//     },[products])

//   return (
//     <Container className="my-5">
//       <div className="text-center py-4">
//         <Title text1="BEST" text2="SELLERS———" />
//         <p className="w-75 mx-auto text-muted small">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
//         </p>
//       </div>

//       {/* Bootstrap Grid for Products */}
//       <Row className="gy-4 justify-content-center">
//   {bestSeller.map((item, index) => (
//     <Col key={index} xs={6} sm={4} md={3} lg={2} className="col-xl-5-custom">
//       <ProductItem id={item._id} image={item.image} name={item.name} price={item.price} />
//     </Col>
//   ))}
// </Row>

//     </Container>
//   )
// }

// export default BestSeller
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Container, Row, Col } from "react-bootstrap";
import Title from "./Title"; 
import ProductItem from "./ProductItem"; // Ensure ProductItem is imported

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestproducts = products.filter((item) => item.bestseller); 
        setBestSeller(bestproducts.slice(0, 5));
    }, [products]); 
    return (
        <Container className="my-5">
            <div className="text-center py-4">
                <Title text1="BEST" text2="SELLERS———" />
                <p className="w-75 mx-auto text-muted small">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                </p>
            </div>

            {/* Bootstrap Grid for Products */}
            <Row className="gy-4 justify-content-center">
                {bestSeller.map((item, index) => (
                    <Col key={index} xs={6} sm={4} md={3} lg={2} className="col-xl-5-custom">
                        <ProductItem id={item._id} image={item.image} name={item.name} price={item.price} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default BestSeller;
