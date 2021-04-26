import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav(props) {

    const tabs = ["Home","About", "Login", "Signup"]

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <ul className="flex-row flex-end">
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
        }
        // } else {
        //     return (
        //         <ul className="flex-row flex-end">
        //             <li className="mx-1 Jones">
        //                 <Link to="/signup">
        //                     Signup
        //                 </Link>
        //             </li>
        //             <li className="mx-1 Jones">
        //                 <Link to="/login">
        //                     Login
        //                 </Link>
        //             </li>
        //         </ul>
        //     );
        // }
    }

    return (
<header className="flex-row flex-end px-2 header-color Jones">
<h1>
                <Link  className="Jones" to="/">
                    <span role="img" aria-label="shopping bag">🧥</span>
                    Steele & Jones
                </Link>
            </h1>

  <div>
    <ul className="flex-row flex-end">
      {tabs.map((tab) => (
        <li className="mx-2" key={tab}>
          <a
            href={"#" + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? "nav-link active" : "nav-link"
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  </div>

            <nav>
                {showNavigation()}
            </nav>
        </header>
    );
}

export default Nav;