import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../assets/E-shop 1.png"



const Register = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const validate = () => {
        const errors = {};
        if (!form.fullName) errors.fullName = 'Full Name is required';
        if (!form.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!form.password) {
            errors.password = 'Password is required';
        } else if (form.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        } else if (form.password.length > 8) {
            errors.password = 'Password must not exceed 8 characters';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // Save data to local storage
            localStorage.setItem('user', JSON.stringify(form));
            toast.success('Registration successful!');
            // Redirect to login page after a short delay
            setTimeout(() => navigate('/Login'), 2000);
        } else {
            setErrors(validationErrors);
            if (validationErrors.password) {
                toast.error(validationErrors.password);
            }
        }
    };


    return (
        <div className="login-container">
            <ToastContainer />
            <div className="login-background"></div>
            <div className="login-content container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mt-5">
                            <div className="card-body">
                                <h3 className="card-title text-center">
                                    <img src={logo} alt="logo" className="login-logo" />
                                </h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            className="form-control"
                                            placeholder="Enter full name"
                                            value={form.fullName}
                                            onChange={handleChange}
                                        />
                                        {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Enter email"
                                            value={form.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <div className="text-danger">{errors.email}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Password"
                                            value={form.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && <div className="text-danger">{errors.password}</div>}
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">Register</button>
                                    </div>
                                </form>
                                <div className="mt-3 text-center">
                                    <Link to="/Login">Already have an account? Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
