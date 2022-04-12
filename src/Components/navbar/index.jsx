import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import userServices from "@services/userServices";
import "./navbar.scss";

const Authenticate = () => {
    return (
        <div className="auth">
            <Link to="/register" className="item signUp">
                Sign Up
            </Link>
            <Link to="/login" className="item signIn">
                Log In
            </Link>
        </div>
    );
};

const User = () => {
    return (
        <div className="user" onClick={userServices.logout}>
            Log out
        </div>
    );
};

function NavBar() {
    const user = useSelector((store) => store.user);

    return (
        <nav className="navbar">
            <div className="wrapper">
                <Link to="/games" className="item logo">
                    Games
                </Link>

                {!user && <Authenticate />}
                {user && <User />}
            </div>
        </nav>
    );
}

export default NavBar;
