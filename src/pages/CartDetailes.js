import React, { useState, useEffect } from 'react';
import logo from "../assets/E-shop 1.png"


const CartDetails = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    
    const removeItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    const renderCartItems = () => {
        if (cartItems.length === 0) {
            return (
                <div className="text-center">
                    <p>No items in cart.</p>
                </div>
            );
        }

        return (
            <div className="carddetails-section card py-5">
                <div className="card-header">Cart Details</div>
                <ul className="list-group list-group-flush">
                    {cartItems.map((item, index) => (
                        <li key={index} className="list-group-item">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src={item.image || logo} alt={item.title} className="img-fluid me-3" style={{ maxWidth: '100px' }} />
                                    <div>
                                        <h5>{item.title}</h5>
                                        <p>Price: {item.price} USD</p>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-danger btn-sm" onClick={() => removeItem(index)}>Remove</button>
                                </div>
                            </div>
                            <hr />
                        </li>
                    ))}
                </ul>
                <div className="card-footer">
                    <h5>Total: {calculateTotal()} USD</h5>
                </div>
            </div>
        );
    };

    return (
        <div className="container mt-4 py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    {renderCartItems()}
                </div>
                <div className="col-lg-4 mt-3 mt-lg-0">
                    <div className="card shipping-section">
                        <div className="card-header">Shipping</div>
                        <div className="card-body">
                            <p>Total Amount: {calculateTotal()} USD</p>
                            <button className="btn btn-primary btn-block">Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;
