import React, { useState, useEffect } from 'react';
import { Offcanvas } from 'bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from "../assets/E-shop 1.png"

const Navbar = () => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [offcanvas, setOffcanvas] = useState(null);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        // Check if user data exists in localStorage
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }

        // Initialize offcanvas menu for smaller screens
        const offcanvasElement = document.getElementById('offcanvasNavbar');
        if (offcanvasElement) {
            const offcanvasInstance = new Offcanvas(offcanvasElement);
            setOffcanvas(offcanvasInstance);
        }

    }, []);


    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('cartItems');
        setUser(null);
        navigate('/Login');
    };


    const handleLinkClick = () => {
        if (offcanvas) {
            offcanvas.hide();
        }
    };

    const getNavLinkClass = (path) => {
        return location.pathname === path ? 'nav-link active' : 'nav-link';
    };



    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className={getNavLinkClass("/")} to="/" onClick={handleLinkClick}>
                                            <i className="bi bi-house-door"></i> Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={getNavLinkClass("/categoriespage")} to="/categoriespage" onClick={handleLinkClick}>
                                            <i className="bi bi-grid-3x3-gap"></i> Categories
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={getNavLinkClass("/cartdetails")} to="/cartdetails" onClick={handleLinkClick}>
                                            <i className="bi bi-box"></i> Cart
                                            <span className={`badge bg-danger${cartItemCount === 0 ? ' d-none' : ''}`} style={{ fontSize: '0.75rem', marginLeft: '5px' }}>{cartItemCount}</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link
                                            className="nav-link dropdown-toggle"
                                            to="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="bi bi-person"></i> {user ? user.fullName : 'Account'}
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            {user ? (
                                                <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                                            ) : (
                                                <>
                                                    <li><Link className="dropdown-item" to="/Login" onClick={handleLinkClick}>Login</Link></li>
                                                    <li><Link className="dropdown-item" to="/Register" onClick={handleLinkClick}>Register</Link></li>
                                                </>
                                            )}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;
