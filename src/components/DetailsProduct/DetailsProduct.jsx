import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { Carousel, Button } from 'antd';

import { productsContext } from "../../contexts/productsContext";
import './DetailProduct.css'

const DetailsProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);
  return (
    <>
    <div className="container" style={{marginTop:"20px"}}>
      {product ? (
        <>
        <div className="big-container">
          <div style={{width:"35vw", border:"1px solid black"}}>
            <Carousel autoplay>
              <div>
                  <img width="100%" src={product.image1} alt="" />
              </div>
              <div>
                  <img width="100%" src={product.image2} alt="" />
              </div>
            </Carousel>
          </div>
          <div style={{width:"35vw"}}>
            <div className="detail-desc">
              <h3>{product.model}</h3>
              <h2>{product.price}</h2>
            </div>
              <Button size="large" style={{margin:"15px 0px", width:"100%"}}>Add to Cart</Button>
              <div>
                <ul className="detail-li">
                  <li>Free returns</li>
                  <li>Free shipping</li>
                  <li>Special Returns & Exchanges Policy applies during Black Friday and Holiday</li>
                </ul>
              </div>
              <div>{product.description}</div>
          </div>
        </div>
        <video src={product.video} width="100%" autoPlay ></video>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
    <div className="detail-nav">

    </div>
    </>
  );
};

export default DetailsProduct;