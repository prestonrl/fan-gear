import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

import Button from 'react-bootstrap/Button';

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async event => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email, password: formState.password,
                firstName: formState.firstName, lastName: formState.lastName
            }
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (

        <section className="my-5" >
            <form className="form-s" onSubmit={handleFormSubmit}>
                <div className="container">
                    <h1 className="text-color text-center Jones">Sign Up</h1>
                    <p className="Jones">Please fill in this form to create an account.</p>

                    <label className="Jones" htmlFor="firstName"><b>First Name:</b></label><br></br>
                    <input type="firstName" id="firstName" className="input-s" placeholder="Enter First Name" name="firstName" required onChange={handleChange}></input><br></br>

                    <label className="Jones" htmlFor="lastName"><b>Last Name:</b></label><br></br>
                    <input type="lastName" id="lastName" className="input-s" placeholder="Enter Last Name" name="lastName" required onChange={handleChange}></input><br></br>

                    <label className="Jones" htmlFor="email"><b>Email:</b></label><br></br>
                    <input type="email" id="email" className="input-s" placeholder="Enter Email" name="email" required onChange={handleChange}></input><br></br>

                    <label className="Jones" htmlFor="psw"><b>Password:</b></label><br></br>
                    <input type="password" id="pwd" className="input-s" placeholder="Enter Password" name="password" required onChange={handleChange}></input><br></br>

                    <Button className="btn" type="submit" value="submit">Sign Up</Button>

                </div>

            </form>
        </section>
    )
}

export default Signup;