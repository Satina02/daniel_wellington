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
    <div className="detail-page">
    <div className="container" style={{marginTop:"20px"}}>
      {product ? (
        <>
        <div className="big-container">
          <div style={{width:"35vw"}}>
            <Carousel autoplay>
              <div>
                  <img width="100%" src={product.image1} alt="" />
              </div>
              <div>
                  <img width="100%" src={product.image2} alt="" />
              </div>
            </Carousel>
          </div>
          <div style={{width:"40vw"}}>
            <div className="detail-desc">
              <h3>{product.model}</h3>
              <h2>{product.price}</h2>
            </div>
              <Button size="large" style={{margin:"15px 0px", width:"100%", height: "55px", backgroundColor: "#00081C", color: "#CDBC7A"}}>Add to Cart</Button>
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
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
    <div className="big-detail">

    </div>
    <div className="detail-nav">
      <div className="nav-det" > 
          <button className="detail-btn1"><span>DETAILS</span></button> 
      </div>

      <div className="nav-det">
       <button className="detail-btn2"><span>SHIPPING INFO</span></button> 
      </div>
      <div className="nav-det">
      <button className="detail-btn3"><span>PAYMENT OPTIONS</span></button>
      </div>
      <div className="nav-det">
      <button className="detail-btn4"><span>RETURNS</span></button>
        </div>
    </div>
    
    <div className="details-img">
      <img style={{width:"100%", marginTop:"200px"}} src="https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/7z4Noh5bndlRRAnfwvixMf/75795be5b3b69f012bd21974f0566c2d/holidays-gift-wrapping-desk-3-iconic.jpg?ecom2=true&format=jpg&width=1140&quality=80&bg-color=FFFFFF" alt="" />
    </div>
    </div>
  );
};

export default DetailsProduct;