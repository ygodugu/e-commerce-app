import React from 'react';
import logo from "../assets/E-shop 1.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer py-3 bg-dark">
            <div className="container text-center text-md-left">
                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <img src={logo} alt="E-shop Logo" className="footer-logo" />
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h5>Contact Us</h5>
                        <div>
                            <p className="text-white mb-1">Hyderabad, Telangana</p>
                            <p className="text-white mb-1">Email: info@eshop.com</p>
                            <p className="text-white">Phone: +91 8074141011</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div>
                            <h5>Follow Us</h5>
                            <Link to="/" className="social-icon me-2"><i className="bi bi-facebook"></i></Link>
                            <Link to="/" className="social-icon me-2"><i className="bi bi-twitter"></i></Link>
                            <Link to="/" className="social-icon me-2"><i className="bi bi-instagram"></i></Link>
                            <Link to="/" className="social-icon"><i className="bi bi-linkedin"></i></Link>
                        </div>
                    </div>
                </div>
                <hr className="text-white" />
                <div className="row mt-3">
                    <div className="col-12">
                        <span className="text-white">© 2024 E-shop</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
