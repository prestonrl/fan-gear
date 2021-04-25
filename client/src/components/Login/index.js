import React from 'react'
import Button from 'react-bootstrap/Button';

function Login() {
    return (
        <section className="my-5" >
        <form className="form-s">
            <div className="container">
                <h1 className="text-color text-center Jones">Login</h1>
                <p className="Jones">Please fill in this form to create an account.</p>
                <label className="Jones" for="email"><b>Email:</b></label><br></br>
                <input type="text" className="input-s" placeholder="Enter Email" name="email" required></input><br></br>

                <label className="Jones" for="psw"><b>Password:</b></label><br></br>
                <input type="password" className="input-s" placeholder="Enter Password" name="psw" required></input><br></br>

                <Button className="btn" type="submit" value="submit">Login</Button>
                
            </div>

        </form>
        </section>
    )
}

export default Login;