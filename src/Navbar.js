import React from 'react';
import { Link } from "react-router-dom";
import { withContext } from "./AppContext"

function Navbar(props) {
    return (
        <nav className="navbar-wrapper">
            <div className="nav-link">
                <Link to="/signup">Sign Up</Link>
            </div>
            {
                  !localStorage.getItem('token') &&
                 <div className="nav-link">
                <Link to="/login">Log In</Link>
            </div>
            }
            {/* <div className="nav-link">
                <Link to="/todos">Todos</Link>
            </div> */}
            {
                localStorage.getItem('token') &&
            <div className="nav-link" >
                <button onClick={() => props.logout()}>
                    <Link to="/login">Logout</Link>
                    </button>
            </div>
            }
        </nav>
    )
}

export default withContext(Navbar);