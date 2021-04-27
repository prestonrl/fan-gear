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
                    <label className="Jones" for="email"><b>Email:</b></label><br></br>
                    <input type="text" className="input-s" placeholder="Enter Email" name="email" required onChange={handleChange}></input><br></br>

                    <label className="Jones" for="psw"><b>Password:</b></label><br></br>
                    <input type="password" className="input-s" placeholder="Enter Password" name="psw" required onChange={handleChange}></input><br></br>

                    <label className="Jones" for="psw-repeat"><b>Repeat Password:</b></label><br></br>
                    <input type="password" className="input-s" placeholder="Repeat Password" name="psw-repeat" required onChange={handleChange}></input>

                    <Button className="btn" type="submit" value="submit">Sign Up</Button>

                </div>

            </form>
        </section>
    )
}

export default Signup;