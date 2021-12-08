import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="main-content">
                <div className="some-div">
                    <span>GET 10% OFF YOUR FIRST ORDER</span>
                </div>
                <div className="second-div">
                <a className="tag-a" href="https://www.facebook.com/danielwellingtonofficial" 
                    title="Facebook" target="_blank" rel="noopener noreferrer">
                    <img style={{width:"40px"}} src="https://logoeps.com/wp-content/uploads/2014/02/20837-facebook-symbol-icon-vector-icon-vector-eps.png" alt="" />
                </a>
                <a className="tag-a" href="https://instagram.com/danielwellington" 
                    title="Instagram" target="_blank" rel="noopener noreferrer">
                    <img style={{width:"50px"}} src="https://thumbs.dreamstime.com/b/instagram-vector-logo-pictogram-icon-web-design-popular-pics-symbol-web-icon-modern-lineart-camera-white-background-126460353.jpg" alt="" />
                </a>
                <a className="tag-a" href="https://www.pinterest.com/itisDW" 
                    title="Pinterest" target="_blank" rel="noopener noreferrer">
                        <img style={{width:"35px"}} src="https://icons-for-free.com/iconfiles/png/512/facebook+internet+media+pinterest+social+twitter+icon-1320192769797415635.png" alt="" />
                </a>
                </div>
                <img style={{width:"100%"}} src="https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/7pQdDgU001WSAzNeOeXh5r/c8b065a33391e229eddbcd189addc7f9/SGLs_Day_Newsletter_2800x1200.jpg?ecom2=true&format=jpg&width=1366&quality=80&bg-color=FFFFFF" alt="" />
            </div>
            <div className="text-widjet">
                <div className="main-text">
                    <div className="daniel">DANIEL WELLINGTON WATCHES AND JEWELLERY</div>
                    <p className="p-text">Discover our selection of women’s watches and men’s watches to find the perfect watch for you. </p>
                </div>
            </div>
            <div className="futer">

            </div>
        </div>
    );
};

export default Footer;