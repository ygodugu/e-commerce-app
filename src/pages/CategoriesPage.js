import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CategoriesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("men's clothing");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState(null); // State to track user information

    // Check user login status on component mount
    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);


    // Fetch products whenever a category is selected
    useEffect(() => {
        if (selectedCategory) {
            setLoading(true);
            fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
                .then(res => res.json())
                .then(json => {
                    setProducts(json);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Error fetching products:', err);
                    setLoading(false);
                });
        }
    }, [selectedCategory]);


    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        return (
            <>
                {'★'.repeat(fullStars)}
                {halfStar ? '☆' : ''}
                {'☆'.repeat(emptyStars)}
            </>
        );
    };


    const handleAddToCart = (product) => {
        if (user) {
            const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            const updatedCartItems = [...existingCartItems, product];
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            toast.success('Product added to cart!');
        } else {
            toast.error('Please login to add to cart.');
        }
    };


    return (
        <div>
            <ToastContainer />
            <div className="categories">
                <div className='container py-3'>
                    <button
                        className={`ml-2 badge rounded-pill ${selectedCategory === "men's clothing" ? 'bg-primary' : 'bg-secondary'}`}
                        onClick={() => setSelectedCategory("men's clothing")}
                    >
                        men's clothing
                    </button>
                    <button
                        className={`mr-4 badge rounded-pill ${selectedCategory === "women's clothing" ? 'bg-primary' : 'bg-secondary'}`}
                        onClick={() => setSelectedCategory("women's clothing")}
                    >
                        women's clothing
                    </button>
                </div>

            </div>

            <div className="products container mt-4 mb-5">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="product-grid">
                        {products.map((product) => (
                            <div key={product.id} className="product-card">
                                <div className="image-wrapper">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="product-info">
                                    <h6>{product.title}</h6>
                                    <p>{product.price} USD</p>
                                    <div className="stars">{renderStars(product.rating.rate)}</div>
                                    <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default CategoriesPage;
