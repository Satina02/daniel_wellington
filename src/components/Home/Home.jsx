import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import { ShoppingCartOutlined, GiftOutlined, InboxOutlined } from "@ant-design/icons";

const Home = () => {
    return (
        <>
            <div className="home-page">
                <div className="video-part">
                <div className="text-center">
                </div>
                <video src="https://videos.ctfassets.net/mv3xw5mnbbp0/7DNi2uIpb9seEY0OiY9GtK/b0b5a1498538799775d9fbe672c8a6fc/508_Web_2800x1100_c.mp4" poster="https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/5L36zg2hXTws0ppg2ELQi3/c0bb28d7af130ecd19207594b414ddc7/holidays-start-page-desk.jpg"></video>
                </div>  
            </div>
            <div className="benefits">
                <div className="main-content">
                    <div className="smth">
                        <div className="smth-item">
                            <ShoppingCartOutlined style={{width:"50px"}} />
                            <span className="item-text">FREE SHIPPING</span>
                            </div>
                        <div className="smth-item">
                            <InboxOutlined style={{width:"30px"}} />
                        <span className="item-text">FREE RETURNS</span>
                        </div>
                        <div className="smth-item">
                            <GiftOutlined style={{width:"40px"}} />
                        <span className="item-text">FREE GIFT WRAPPING</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="some-text">
                <div className="some">
                    <div class="h3">Buy 1, get <strong>10% off</strong></div>
                    <div class="h3">Buy 2, get <strong>30% off</strong></div>
                    <div class="h3">Buy 3 or more, get <strong>50% off</strong></div>
                    <br />
                    <div class="h6">exclusions apply to Iconic Link Automatic</div>
                </div>
            </div>
            <div className="types-product">
                <Link to="/products"><p className="types">WATCHES</p></Link>
                <p className="types">JEWERELY</p>
                <p className="types">BRACELETS</p>
            </div>
            
        </>
    );
};

export default Home;