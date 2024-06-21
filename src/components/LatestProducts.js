import React from 'react';
import s1 from "../assets/most-selling-s1.jpeg";
import s2 from "../assets/most-selling-s2.jpeg";
import s3 from "../assets/most-selling-s3.jpeg";
import s4 from "../assets/most-selling-s4.jpeg";

const products = [
    {
        id: 1,
        name: "Fantasy Florals. Trend tip",
        image: s1,
        stars: 4.5,
    },
    {
        id: 2,
        name: "Casual Trench. Trend tip",
        image: s2,
        stars: 3.8,
    },
    {
        id: 3,
        name: "Puff Sleeves. Trend tip",
        image: s3,
        stars: 4.2,
    },
    {
        id: 4,
        name: "Blazer Fashion Trend",
        image: s4,
        stars: 5,
    },
];

const ProductCard = ({ product }) => {

    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(product.stars);
        const halfStar = product.stars - fullStars >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
        }

        if (halfStar) {
            stars.push(<i key={stars.length} className="bi bi-star-half text-warning"></i>);
        }

        return stars;
    };

    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card latest-product-card border-0 h-100">
                <div className="card-body text-center d-flex flex-column">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid latest-product-image mb-2"
                    />
                    <h2 className="latest-product_name mt-2 flex-grow-1">
                        {product.name}
                    </h2>
                    <div className="stars mt-2">
                        {renderStars()}
                    </div>
                </div>
            </div>
        </div>
    );
};

const LatestProducts = () => {
    return (
        <section className="latest-product py-5">
            <div className="container mt-2">
                <h2 className="text-center">Most Sell Products</h2>
                <hr />
                <div className="row py-3">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LatestProducts;
