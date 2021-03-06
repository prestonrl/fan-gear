import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import logoImg from '../../assets/raiders-hat-logo.png';

function Nav(props) {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/testimonials">
                            Testimonials
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/orderHistory">
                            Order History
                        </Link>
                    </li>
                    <li className="mx-1">
                        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/testimonials">
                            Testimonials
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/signup">
                            Signup
                        </Link>
                    </li>
                    
                </ul>
            );
        }
    }

    return (
        <header className="flex-row space-between px-2 header-color Jones">
            <h1>
                <Link  className="Jones" to="/">
                    <img className="logo-img" src={logoImg} alt=""></img>
                    Steele & Jones
                </Link>
            </h1>

            <nav>
                {showNavigation()}
            </nav>
        </header>
    );
}

export default Nav;