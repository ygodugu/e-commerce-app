import React from 'react';
import men from "../assets/Our-Categories-s1.png";
import girl from "../assets/Our-Categories-s2.png";
import { Link } from 'react-router-dom';


const Categories = () => {
    return (
        <div className="categories-section">
            <section>
                <div className="container">
                    <h1 className="text-center mb-4">Our Categories</h1>
                    <div className="row">
                        <div className="col-lg-6 mb-4 mb-lg-0 d-flex flex-column">
                            <div className="item d-flex flex-column flex-lg-row align-items-center text-center text-lg-start h-100 shadow">
                                <div className="text me-lg-4 flex-grow-1 mx-lg-5 mb-3 mb-lg-0">
                                    <p className='small-headding'>Men's Collection</p>
                                    <h3>Men New Arrivals</h3>
                                    <p>Get 20% Off Selected Product</p>
                                    <Link to="/categoriespage" className="btn btn-primary">
                                        View more
                                    </Link>
                                </div>
                                <div className="image-container">
                                    <img
                                        src={men}
                                        alt="Healthy Food"
                                        className="img-fluid card-img"
                                        style={{
                                            height: "auto",
                                            maxWidth: "100%",
                                            marginRight: "0",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex flex-column">
                            <div className="item d-flex flex-column flex-lg-row align-items-center text-center text-lg-start h-100 shadow">
                                <div className="text me-lg-4 flex-grow-1 mx-lg-5 mb-3 mb-lg-0">
                                    <p className='small-headding'>Women's Collection</p>
                                    <h3>Women New Arrivals</h3>
                                    <p>Get 20% Off Selected Product</p>
                                    <Link to="/categoriespage" className="btn btn-primary">
                                        View more
                                    </Link>
                                </div>
                                <div className="image-container">
                                    <img
                                        src={girl}
                                        alt="Fresh Vegetables"
                                        className="img-fluid"
                                        style={{
                                            height: "auto",
                                            maxWidth: "100%",
                                            marginRight: "0",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Categories;
