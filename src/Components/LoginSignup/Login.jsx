import React from "react";
import './Auth.css';
import { FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login =  () => {
    return (
        <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
           <div className="form_container p-5 rounded bg-white">
            <form>
                    <h3>Sign In</h3>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <FormControl type="email" placeholder="Enter Email" />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <FormControl type="password" placeholder="Enter Password" />
                    </div>

                    <div className="mb-2">
                        <input type="checkbox" id="check" className="custom-control custom-checkbox me-2"/>
                        <label htmlFor="check" className="custom-input-label">
                            Remember me
                        </label>
                    </div>
                    <div className="d-grid">
                        <Button bg="primary">Sign In</Button>
                    </div>

                    <div className="mt-2 d-flex justify-content-between">
                        <a href="#" style={{ textDecoration: 'none' }}>Forgot password?</a> 
                        <Link to="/signup" style={{ textDecoration: 'none' }} className="ms-2">Sign Up</Link>
                    </div> 
                </form>
           </div>
        </div>
    )
}

export default Login

