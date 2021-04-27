import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import Button from 'react-bootstrap/Button';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e)
        }
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
                    <h1 className="text-color text-center Jones">Login</h1>

                    <label className="Jones" for="email"><b>Email:</b></label><br></br>
                    <input type="text" className="input-s" placeholder="Enter Email" name="email" required onChange={handleChange}></input><br></br>

                    <label className="Jones" for="psw"><b>Password:</b></label><br></br>
                    <input type="password" className="input-s" placeholder="Enter Password" name="psw" required onChange={handleChange}></input><br></br>

                    {
                        error ? <div>
                            <p className="error-text" >The provided credentials are incorrect</p>
                        </div> : null
                    }
                    <Button className="btn" type="submit" value="submit">Login</Button>
                </div>

            </form>
        </section>
    )
}

export default Login;