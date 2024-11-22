import React from "react";
import './Auth.css';
import { FormControl, Button, Checkbox } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp =  () => {
    return (
        <div className="sign-up template d-flex justify-content-center align-items-center vh-100 bg-primary">
           <div className="form_container p-5 rounded bg-white">
            <form>
                    <h3>Sign Up</h3>                  

                    <div className="mb-2">
                        <label htmlFor="firstname">First Name</label>
                        <FormControl placeholder="Enter First Name" />
                    </div>
                    
                    <div className="mb-2">
                        <label htmlFor="lastname">Last Name</label>
                        <FormControl placeholder="Enter Last Name" />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <FormControl type="email" placeholder="Enter Email" />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <FormControl type="password" placeholder="Enter Password" />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="password">Verify Password</label>
                        <FormControl type="password" placeholder="Re-enter Password" />
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
                    <p className="mt-2 text-center">
                        Already have account?
                        <Link to="/login" style={{ textDecoration: 'none' }} className="ms-2">Login</Link>
                    </p>
                </form>
           </div>
        </div>
    )
}

export default SignUp

