import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title"; 
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <Container className="my-5">
      <div className="text-center py-4">
        <Title text1="LATEST" text2="COLLECTIONS———" />
        <p className="w-75 mx-auto text-muted small">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        </p>
      </div>

      {/* Bootstrap Grid for Products */}
      <Row className="gy-4 justify-content-center">
  {latestProducts.map((item, index) => (
    <Col key={index} xs={6} sm={4} md={3} lg={2} className="col-xl-5-custom">
      <ProductItem id={item._id} image={item.image} name={item.name} price={item.price} />
    </Col>
  ))}
</Row>

    </Container>
  );
};

export default LatestCollection;
