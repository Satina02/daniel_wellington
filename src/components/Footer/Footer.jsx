import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="main-content">
                <div className="some-div">
                    <span>GET 10% OFF YOUR FIRST ORDER</span>
                    <p style={{marginTop:"20px"}}>Sign up to our newsletter to be the first to know about our latest news and exclusive offers and receive a 10% discount code to use on your first order with us.</p>
                    <p>EMAIL ADDRESS</p>
                    <div style={{width:"100%"}}>
                        <input style={{width: "60%", marginRight: "15px",height: "50px", border: "gray solid 1px"}} type="text" />
                        <button style={{width:"30%", height: "50px", color: "#FFFFFF",backgroundColor: "#C7C7C7",
                                  border: "1px", cursor:"pointer"}}>SIGN UP
                        </button>
                    </div>
                    <p style={{color:"gray", marginTop:"10px", marginBottom:"0px"}}>By signing up, I confirm that (i) I am 16 years or older, (ii) I want to <br /> receive personalized marketing material through email or other <br /> electronic communication, and (iii) I have read Daniel Wellington’s <br /> Privacy Policy</p>
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
            <div className="futer">
                <div className="innder-futer">
                    <div className="shop-comp">
                        <button>
                            <span>SHOP</span>
                        </button>
                                <ul className="shop-ul">
                                    <li>
                                        <span>Shop Instagram</span>
                                    </li>
                                    <li>
                                        <span>All Watches</span>
                                    </li>
                                    <li>
                                        <span>Jewelry</span>
                                    </li>
                                    <li>
                                        <span>Watch Straps</span>
                                    </li>
                                    <li>
                                        <span>Stores</span>
                                    </li>
                                    <li>
                                        <span>Inspiration</span>
                                    </li>
                                    <li>
                                        <span>Live Shopping</span>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    <div className="shop-comp">
                        <button>
                            <span>Customer Service</span>
                        </button>
                        <ul className="shop-ul">
                            <li>
                                <span class="css-1fgw2as">FAQ</span>
                            </li>
                            <li>
                                <span class="css-1fgw2as">Contact us</span>
                            </li>
                            <li>
                                <span class="css-1fgw2as">Size information</span>
                            </li>
                            <li>
                                <span class="css-1fgw2as">How to change your strap</span>
                            </li>
                            <li>
                                <span class="css-1fgw2as">How to adjust your mesh strap</span>
                            </li>
                            <li>
                                <span class="css-1fgw2as">How to measure your ring size</span>
                            </li>
                        </ul>
                    </div>
                    <div class="shop-comp">
                        <button>
                            <span>INFORMATION</span>
                        </button>
                        <ul className="shop-ul">
                            <li>
                                <span>Return Policy</span>
                            </li>
                            <li>
                                <span class="css-1fgw2as">Privacy Policy</span>
                            </li>
                            <li>
                                <span class="css-1fgw2as">Terms</span>
                            </li>
                                <span>Cookies Settings</span>
                        </ul>
                    </div>
                    <div class="shop-comp">
                        <button>
                            <span>ABOUT US</span>
                        </button>
                        <ul lassName="shop-ul">
                            <li>
                                <span>Our Story</span>
                            </li>
                            <li>
                                <span>#DWMOMENTS</span>
                            </li>
                            <li>
                                <span>Career</span>
                            </li>
                            <li>
                                <span>Accessibility</span>
                            </li>
                            <li> 
                                <span>Sustainability</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    );
};

export default Footer;