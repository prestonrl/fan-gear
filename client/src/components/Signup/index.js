import React from 'react'
import Button from 'react-bootstrap/Button';

function Signup() {
    return (

        <section className="my-5" >
        <form className="form-s">
            <div className="container">
                <h1 className="text-color text-center Jones">Sign Up</h1>
                <p className="Jones">Please fill in this form to create an account.</p>
                <label className="Jones" for="email"><b>Email:</b></label><br></br>
                <input type="text" className="input-s" placeholder="Enter Email" name="email" required></input><br></br>

                <label className="Jones" for="psw"><b>Password:</b></label><br></br>
                <input type="password" className="input-s" placeholder="Enter Password" name="psw" required></input><br></br>

                <label className="Jones" for="psw-repeat"><b>Repeat Password:</b></label><br></br>
                <input type="password" className="input-s" placeholder="Repeat Password" name="psw-repeat" required></input>

                <Button className="btn" type="submit" value="submit">Sign Up</Button>
                
            </div>

        </form>
        </section>
    )
}

export default Signup;